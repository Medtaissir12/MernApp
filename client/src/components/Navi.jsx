import React from "react";
import "./navi.css";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="mega_menu">
          <ul>
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <span>Jersys</span>
              <div className="sub_menu">
                <div class="col">
                  <Link to="/products/Jersey">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/LarryJohnson-Hornets-Home-White-1_400x400.jpg?v=1658571459"
                      alt="Man jersey"
                    />
                  </Link>
                  <div className="img-text">Man</div>
                </div>
                <div className="col">
                  <Link to="/products/women-jersey">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/Ecomm-Liz-73_400x400.jpg?v=1626837035"
                      alt="Women jersey"
                    />
                  </Link>

                  <div className="img-text">Women</div>
                </div>
                <div class="col">
                  <Link to="/products/kids-jersey">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/ShaqYouth1_400x400.jpg?v=1663852862"
                      alt="kids jersey"
                    />
                  </Link>
                  <div className="img-text">Kids</div>
                </div>
              </div>
            </li>
            <li>
              <span>Hoodies</span>
              <div className="sub_menu ">
                <div className="col ">
                  <Link to="/products/hoodies">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/Hoodie-Suns1_400x400.jpg?v=1664039625"
                      alt=" man hoodies"
                    />
                  </Link>
                  <div className="img-text">Man</div>
                </div>
                <div className="col">
                  <Link to="/products/women-hoodies">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0513/9044/7797/products/NBABostonCelticsWomen_sHoodieFront.jpg?v=1619146208"
                      alt="women hoodies"
                    />
                  </Link>

                  <div className="img-text">Women</div>
                </div>
                <div className="col">
                  <Link to="/products/kids-hoodies">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/1_1_400x400.jpg?v=1654497127"
                      alt="kids hoodies"
                    />
                  </Link>

                  <div className="img-text">Kids</div>
                </div>
              </div>
            </li>
            <li>
              <span>T-Shirts</span>
              <div className="sub_menu">
                <div className="col">
                  <Link to="/products/t-shirts">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/13343701_NE94011M_BK_32197AD00_MILBUC_FRONT_M_400x400.jpg?v=1668298287"
                      alt="man t-shirts"
                    />
                  </Link>

                  <div className="img-text">Man</div>
                </div>
                <div className="col">
                  <Link to="/products/women-t-shirts">
                    <img
                      src="https://shoptommy.scene7.com/is/image/ShopTommy/TG001585A_627_FNT?wid=547&hei=730&fmt=jpeg&qlt=90%2C0&resMode=trilin&op_usm=0.8%2C1.0%2C6%2C0&iccEmbed=0&op_sharpen=1"
                      alt="women t-shirts"
                    />
                  </Link>

                  <div className="img-text">Women</div>
                </div>
                <div className="col">
                  <Link to="/products/kids-t-shirts">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/GSWLogoYouth1_400x400.jpg?v=1672936287"
                      alt="kids t-shirt"
                    />
                  </Link>

                  <div className="img-text">Kids</div>
                </div>
              </div>
            </li>
            <li>
              <span>FootWear</span>
              <div className="sub_menu">
                <div className="col">
                  <Link to="/products/shoes">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/376641_02_400x400.jpg?v=1660521915"
                      alt="shoes"
                    />
                  </Link>
                  <div className="img-text">Shoes</div>
                </div>
                <div className="col">
                  <Link to="/products/slides">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/384580_01_400x400.jpg?v=1656643513"
                      alt="slides"
                    />
                  </Link>
                  <div className="img-text">Slides</div>
                </div>
                <div className="col">
                  <Link to="/products/socks">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2030/1917/products/a558c21grs_gld-1200_400x400.jpg?v=1632880491"
                      alt="socks"
                    />
                  </Link>
                  <div className="img-text">Socks</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navi;
