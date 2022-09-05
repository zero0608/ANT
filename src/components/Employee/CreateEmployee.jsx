import React, { Component } from "react";
import EmployeeService from "../../services/EmployeeService";

// function FormError(props) {
//   if (props.isHidden) {
//     return null;
//   }
//   return <div className="text-danger">{props.errorMessage}</div>;
// }

// const validateEmail = (checkingEmail) => {
//   var regexp = /\S+@\S+\.\S+/;
//   if (regexp.exec(checkingEmail) !== null) {
//     return {
//       isInputValid: true,
//       errorMessage: "",
//     };
//   } else {
//     return {
//       isInputValid: false,
//       errorMessage: "Email không đúng định dạng",
//     };
//   }
// };

class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordShown: true,
      fullname: "",
      username: "",
      password: "",
      email: "",
      isInputValid: true,
      errorMessage: "",
    };

    this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.togglePassword = this.togglePassword.bind(this);

    this.cancel = this.cancel.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    // this.handleInputValidation = this.handleInputValidation.bind(this);
  }

  // handleInputValidation(event) {
  //   const { isInputValid, errorMessage } = validateEmail(this.state.email);
  //   this.setState({
  //     isInputValid: isInputValid,
  //     errorMessage: errorMessage,
  //   });
  // }

  saveEmployee(e) {
    e.preventDefault();
    let employee = {
      fullname: this.state.fullname,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };
    // console.log("employee => " + JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then((res) => {
      this.props.history.push("/employees");
    });
  }
  togglePassword() {
    this.setState({ passwordShown: !this.state.passwordShown });
  }

  changeFullNameHandler(event) {
    this.setState({ fullname: event.target.value });
  }

  changeUsernameHandler(event) {
    this.setState({ account: event.target.value });
  }

  changePasswordHandler(event) {
    this.setState({ password: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  //similar useEffect
  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  cancel() {
    this.props.history.push("/employees");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Thêm nhân viên</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Họ tên:</label>
                    <input
                      placeholder="Họ tên"
                      name="fullname"
                      className="form-control"
                      value={this.state.fullname}
                      onChange={this.changeFullNameHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Tài khoản:</label>
                    <input
                      placeholder="Tài khoản"
                      name="account"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.changeUsernameHandler}
                      required
                    />
                  </div>
                  <div className="form-group" style={{ height: "69px" }}>
                    <label>Mật khẩu:</label>
                    <input
                      type={this.state.passwordShown ? "password" : "text"}
                      placeholder="Mật khẩu"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                      required
                      style={{ width: "490px" }}
                    />
                    {/* <button
                      className="btn btn-outline-primary"
                      onClick={this.togglePassword}
                      style={{ marginTop: "-50px", marginLeft: "491px" }}
                    > */}
                    {this.state.passwordShown ? (
                      <i
                        className="btn btn-outline-primary"
                        onClick={this.togglePassword}
                        style={{ marginTop: "-50px", marginLeft: "491px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eye-slash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                          <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                          <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                        </svg>
                      </i>
                    ) : (
                      <i
                        className="btn btn-outline-primary"
                        onClick={this.togglePassword}
                        style={{ marginTop: "-50px", marginLeft: "491px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                      </i>
                    )}
                    {/* </button> */}

                    {/* <button onClick={this.togglePassword}>show</button> */}
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                      required
                      // onBlur={this.handleInputValidation}
                    />
                    {/* <FormError
                      isHidden={this.state.isInputValid}
                      errorMessage={this.state.errorMessage}
                    /> */}
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveEmployee}
                    style={{ margin: "10px 0 0 0px" }}
                  >
                    Lưu
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ margin: "10px 0 0 10px" }}
                  >
                    Hủy
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployee;
