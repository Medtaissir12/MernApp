import "./orders.css";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { getOrders , deleteOrder } from "../../redux/apiCalls";
import { formatDistanceToNow } from "date-fns";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  
 
  const columns = [
    {
      field: "products",
      headerName: "Products",
      width: 350,
      valueGetter: (params) =>
        params.row.products
          .map((product) => `${product.description} (${product.quantity})`)
          .join("\n"),
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 150,
      valueGetter: (params) => {
        const distance = formatDistanceToNow(new Date(params.row.createdAt), {
          addSuffix: true,
        });
        return distance;
      },
    },
    {
      field: "shipping.name",
      headerName: "Name",
      width: 150,
      valueGetter: (params) => params.row.shipping.name,
    },
    {
      field: "shipping.phone",
      headerName: "Phone",
      width: 150,
      valueGetter: (params) => params.row.shipping.phone,
    },
    {
      field: "shipping.email",
      headerName: "Email",
      width: 100,
      valueGetter: (params) => params.row.shipping.email,
    },

    {
      field: "shipping.address.city",
      headerName: "Adress",
      width: 100,
      valueGetter: (params) => params.row.shipping.address.city,
    },
    {
      field: "total",
      headerName: "Total Amount",
      width: 100,
      valueFormatter: (params) =>
        `${(params.value / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default Orders;
