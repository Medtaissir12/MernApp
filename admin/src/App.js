import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/home/Home";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/producList/ProductList";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Transactions from "./pages/transaction/Transactions";
import Orders from "./pages/orders/Orders";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div>
      {currentUser ? (
        <>
          <Navbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </>
      ) : (
        // Navigate to the Login page if currentUser is null
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
