import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import CheckoutSuccess from "./components/CheckoutSuccess";
import NotFound from "./components/NotFound";
import Wishlist from "./pages/Wishlist";
import SearchResults from "./components/SearchResults";


function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/products/" element={<ProductList />} />
      <Route path="/search" component={SearchResults} />

      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
