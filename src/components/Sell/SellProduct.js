import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/anh.png";

class SellProduct extends Component {
  render() {
    return (
      <div>
        <p>Đây là chỗ bán hàng</p>
        <Link className="opacity-5 text-dark" to="/home">
          Quản lý
        </Link>
        {/* <img src={img} class="navbar-brand-img h-100" alt="main_logo" /> */}
      </div>
    );
  }
}

export default SellProduct;
