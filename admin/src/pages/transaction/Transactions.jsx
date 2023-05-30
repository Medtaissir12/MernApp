import "./transactions.css";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getOrders } from "../../redux/apiCalls";
import { formatDistanceToNow } from "date-fns";




const Transactions = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  console.log("These are:",orders);


  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = () => {};

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={
                params.row.avatar ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
            />
            {params.row.userId}
          </div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 200,
      valueGetter: (params) => {
        const distance = formatDistanceToNow(new Date(params.row.createdAt), {
          addSuffix: true,
        });
        return distance;
      },
    },

    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
      valueGetter: (params) => {
        const amount = (params.row.total / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
        return amount;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      valueGetter: (params) => params.row.delivery_status,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
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

export default Transactions;
