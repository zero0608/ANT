import React, { Component } from "react";
import EmployeeService from "../../services/EmployeeService";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      currentPage: 1,
      todosPerPage: 5,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: "disabled",
      isNextBtnActive: "",
      pageBound: 3,
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  // componentDidUpdate() {
  //   this._("ul li.active").removeClass("active");
  //   this._("ul li#" + this.state.currentPage).addClass("active");
  // }

  //tương tự như useEffect
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/employees/view_employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }
  render() {
    return (
      <div className="container">
        <Sidebar />
        <div className="container-fluid py-4" style={{ marginLeft: "120px" }}>
          <Header />
          <h2 className="text-center"> Danh sách nhân viên</h2>
          <div className="row">
            <div className="col-4">
              <Link
                className="btn btn-outline-dark"
                to="/employees/add_employee"
              >
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
                  <th>Họ tên</th>
                  <th>Tài khoản</th>
                  <th>Mật khẩu</th>
                  <th>Email</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee, index) => (
                  <tr style={{ textAlign: "center" }}>
                    <td>{index + 1}</td>
                    <td>{employee.employee_id}</td>
                    <td>{employee.fullname}</td>
                    <td>{employee.username}</td>
                    <td>{employee.password}</td>
                    <td>{employee.email}</td>
                    <td>
                      <Link
                        style={{ marginTop: "15px" }}
                        className="btn btn-outline-warning mr-2"
                        to="#"
                        onClick={() => this.viewEmployee(employee.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eye-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                      </Link>
                      <Link
                        className="btn btn-outline-primary mr-2"
                        style={{ marginLeft: "8px", marginTop: "15px" }}
                        to={`/employees/edit_employee/${employee.employee_id}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                      </Link>
                      <Link
                        className="btn btn-outline-danger mr-2"
                        style={{ marginLeft: "8px", marginTop: "15px" }}
                        to="#"
                        onClick={() =>
                          this.deleteEmployee(employee.employee_id)
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash-fill"
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

export default ListEmployee;
