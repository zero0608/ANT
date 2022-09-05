import React, { Component } from "react";
import imgSign from "../../assets/img/savia1.jpg";
import AuthService from "../../services/AuthService";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

//   const email = (value) => {
//     if (!isEmail(value)) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This is not a valid email.
//         </div>
//       );
//     }
//   };

//   const vusername = (value) => {
//     if (value.length < 3 || value.length > 20) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           The username must be between 3 and 20 characters.
//         </div>
//       );
//     }
//   };

//   const vpassword = (value) => {
//     if (value.length < 6 || value.length > 40) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           The password must be between 6 and 40 characters.
//         </div>
//       );
//     }
//   };

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFullname = this.onChangeFullname.bind(this);

    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
      successful: false,
    };
  }
  onChangeFullname(e) {
    this.setState({
      fullname: e.target.value,
    });
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
      message: "",
    });

    AuthService.register(
      this.state.fullname,
      this.state.username,
      this.state.email,
      this.state.password
    )
      .then(() => {
        this.setState({
          successful: true,
          message: "",
        });
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        this.setState({
          successful: false,
          message: resMessage,
        });
      });
  }
  render() {
    return (
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div
                className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                style={{
                  backgroundImage: `url(${imgSign})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
              <div className="card card-plain">
                <div className="card-header">
                  <h4 className="font-weight-bolder">Sign Up</h4>
                  <p className="mb-0">Enter your information to register</p>
                </div>
                <div className="card-body">
                  <form role="form">
                    <div className="form-group">
                      <label className="form-label">Họ tên</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullname"
                        value={this.state.fullname}
                        onChange={this.onChangeFullname}
                        required={required}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Tài khoản</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        required={required}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        required={required}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mật khẩu</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required={required}
                      />
                    </div>
                    {this.state.message && (
                      <div className="form-group">
                        <div
                          className={
                            this.state.successful
                              ? "alert alert-success"
                              : "alert alert-danger"
                          }
                          role="alert"
                        >
                          {this.state.message}
                        </div>
                      </div>
                    )}

                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                        onClick={this.handleRegister}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p
                      className="mb-2 text-sm mx-auto"
                      style={{ marginTop: "10px" }}
                    >
                      Đã có tài khoản?
                      <a
                        href="/login"
                        className="text-primary text-gradient font-weight-bold"
                      >
                        Đăng nhập
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
