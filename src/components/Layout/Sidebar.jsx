import React, { Component } from "react";
import "../../assets/css/nucleo-icons.css";
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/material-dashboard.css?v=3.0.4";
import imgLogo from "../../assets/img/logo-ct.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <aside
          className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
          id="sidenav-main"
        >
          <div className="sidenav-header">
            <i
              className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
              aria-hidden="true"
              id="iconSidenav"
            ></i>
            <a
              className="navbar-brand m-0"
              href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
              target="_blank"
            >
              <img
                src={imgLogo}
                className="navbar-brand-img h-100"
                alt="main_logo"
              />
              <span className="ms-1 font-weight-bold text-white">
                Quản lý cửa hàng
              </span>
            </a>
          </div>
          <hr className="horizontal light mt-0 mb-2"></hr>
          <div
            className="collapse navbar-collapse  w-auto "
            id="sidenav-collapse-main"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="/home">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                  <span className="nav-link-text ms-1">Trang chủ</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="/product_category">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                  <span className="nav-link-text ms-1">Thể loại</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="/product">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                  <span className="nav-link-text ms-1">Sản phẩm</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="/customer">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                  <span className="nav-link-text ms-1">Khách hàng</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="/employees">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                  <span className="nav-link-text ms-1">Nhân viên</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="/bill">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                  <span className="nav-link-text ms-1">Hóa đơn</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="/provider">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                  <span className="nav-link-text ms-1">Nhà cung cấp</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="/store">
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                  <span className="nav-link-text ms-1">Nhập kho</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
