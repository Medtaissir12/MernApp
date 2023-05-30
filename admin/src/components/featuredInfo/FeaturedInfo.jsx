import React, { useEffect, useState } from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredInfo.css";
import { userRequest } from "../../requestMethods";

const FeaturedInfo = () => {
  const [revenue, setRevenue] = useState({});
  const [sales, setSales] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [gain, setGain] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch revenue data
        const revenueRes = await userRequest.get("orders/revenue");
        setRevenue(revenueRes.data);

        // Fetch sales data
        const salesRes = await userRequest.get("orders/income");
        const currentMonth = new Date().getMonth() + 1; // Get the current month
        const currentSales = salesRes.data.find(
          (item) => item._id === currentMonth
        );

        if (currentSales) {
          setSales(currentSales.total);
        }

        // Fetch order count data
        const orderCountRes = await userRequest.get("orders/order-count");
        const currentMonthOrderCount = orderCountRes.data.find(
          (item) => item.month === currentMonth
        );
        if (currentMonthOrderCount) {
          setOrderCount(currentMonthOrderCount.count);
          const previousMonthOrderCount = orderCountRes.data.find(
            (item) => item.month === currentMonth - 1
          );
          const previousMonthCount = previousMonthOrderCount
            ? previousMonthOrderCount.count
            : 0;
          const gain = currentMonthOrderCount.count - previousMonthCount;
          setGain(gain);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {(revenue.revenue / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          <span className="featuredMoneyRate">
            {Math.floor(revenue.percentage)}%{" "}
            {Math.floor(revenue.percentage) < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">In the current month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {(sales / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          <span className="featuredMoneyRate">
            {sales < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Total Sales</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Orders</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{orderCount}</span>
          <span className="featuredMoneyRate">
            {gain} <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">In the current month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
