const router = require("express").Router();
const { Order } = require("../models/Order");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// CREATE
router.post("/", verifyToken, async (req, res) => {
  const {
    userId,
    products,
    subtotal,
    total,
    shipping,
    delivery_status,
    payment_status,
  } = req.body;

  const newOrder = new Order({
    userId,
    products,
    subtotal,
    total,
    shipping: {
      address: shipping.address,
      email: shipping.email,
      name: shipping.name,
      phone: shipping.phone,
      tax_exempt: shipping.tax_exempt,
      tax_ids: shipping.tax_ids,
    },
    delivery_status,
    payment_status,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            "products.id": productId,
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$total",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
// number of order monthly
router.get("/order-count", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const orderCount = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            "products.id": productId,
          }),
        },
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          month: "$_id",
          count: 1,
          _id: 0,
        },
      },
    ]);
    res.status(200).json(orderCount);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET REVENUE
router.get("/revenue", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const currentMonth = date.getMonth(); // Get the current month 
  const previousMonth = currentMonth - 1; // Calculate the previous month

  try {
    const currentMonthIncome = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: new Date(date.getFullYear(), currentMonth, 1) },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$total" },
        },
      },
    ]);

    const previousMonthIncome = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: new Date(date.getFullYear(), previousMonth, 1) },
          createdAt: { $lt: new Date(date.getFullYear(), currentMonth, 1) },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$total" },
        },
      },
    ]);

    const currentMonthTotal = currentMonthIncome.length
      ? currentMonthIncome[0].total
      : 0;
    const previousMonthTotal = previousMonthIncome.length
      ? previousMonthIncome[0].total
      : 0;

    const revenue = currentMonthTotal - previousMonthTotal;
    const percentage = ((currentMonthTotal * 100) / previousMonthTotal - 100)

    res.status(200).json({ revenue, percentage });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER SPENT
router.get("/spent", verifyTokenAndAdmin, async (req, res) => {
  try {
    const userSpent = await Order.aggregate([
      {
        $group: {
          _id: "$userId",
          totalSpent: { $sum: "$total" }
        }
      },
      {
        $project: {
          userId: "$_id",
          totalSpent: 1,
          _id: 0
        }
      }
    ]);

    res.status(200).json(userSpent);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET MONEY FROM EVERY PRODUCT
router.get("/product-money", verifyTokenAndAdmin, async (req, res) => {
  try {
    const productMoney = await Order.aggregate([
      {
        $unwind: "$products" 
      },
      {
        $group: {
          _id: "$products.id", 
          totalMoney: { $sum: "$products.amount_total" } 
        }
      },
      {
        $project: {
          productId: "$_id", 
          totalMoney: 1,
          _id: 0
        }
      }
    ]);

    res.status(200).json(productMoney);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
