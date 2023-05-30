import "./widgetLg.css";
import React, { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { formatDistanceToNow } from "date-fns";

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  // Sort the orders array by the latest created order
  const sortedOrders = orders.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.slice(0, 4).map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <img
                  src={
                    order.img ||
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  }
                  alt=""
                  className="widgetSmImg"
                />
                <span className="widgetLgName">{order.userId}</span>
              </td>

              <td className="widgetLgDate">
                {formatDistanceToNow(new Date(order.createdAt), {
                  addSuffix: true,
                })}
              </td>
              <td className="widgetLgAmount">
                {(order.total / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="widgetLgStatus">
                <Button type={order.delivery_status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
