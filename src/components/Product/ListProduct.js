import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import ProductService from "../../services/ProductService";

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    ProductService.getProduct().then((res) => {
      this.setState({ product: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <Sidebar />
        <div class="container-fluid py-4" style={{ marginLeft: "120px" }}>
          <Header />
          <h2 className="text-center"> Danh sách sản phẩm</h2>
          <div className="row">
            <div className="col-4">
              <Link className="btn btn-outline-dark" to="#">
                Thêm mới
              </Link>
            </div>
          </div>
          <div className="row">
            <table className="table-striped table-bordered">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>STT</th>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Thể loại</th>
                  <th>Đơn vị</th>
                  <th>Số lượng</th>
                  <th>Giá bán</th>
                  <th>Mô tả</th>
                  <th>Ảnh</th>
                  <th>Ngày tạo</th>
                  <th>Tình trạng</th>
                  <th>Tồn kho</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {this.state.product.map((pro, index) => (
                  <tr style={{ textAlign: "center" }}>
                    <td>{index + 1}</td>
                    <td>{pro.product_code}</td>
                    <td>{pro.product_name}</td>
                    <td>{pro.product_category_id}</td>
                    <td>{pro.unit}</td>
                    <td>{pro.number}</td>
                    <td>{pro.sell_price}</td>
                    <td>{pro.description}</td>
                    <td>{pro.product_img}</td>
                    <td>{pro.date_created}</td>
                    <td>{pro.status}</td>
                    <td>{pro.stock}</td>
                    <td>
                      <Link
                        className="btn btn-outline-warning mr-2"
                        to="#"
                        // onClick={() => this.viewEmployee(employee.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                      </Link>
                      <Link
                        className="btn btn-outline-primary mr-2"
                        style={{ marginLeft: "8px" }}
                        to="#"
                        // to={`/employees/edit_employee/${employee.id}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                      </Link>
                      <Link
                        className="btn btn-outline-danger mr-2"
                        style={{ marginLeft: "8px" }}
                        to="#"
                        // onClick={() => this.deleteEmployee(employee.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListProduct;
