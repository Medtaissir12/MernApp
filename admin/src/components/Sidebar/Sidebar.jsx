import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  LocalShipping
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleLogout = () => {
  dispatch(logout());
  navigate("/login");
};



  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <Link to="/orders" className="link">
              <li className="sidebarListItem">
                <LocalShipping className="sidebarIcon" />
                Orders
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Account</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LogoutIcon className="sidebarIcon" onClick={handleLogout} />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
