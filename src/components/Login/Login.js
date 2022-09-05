import React, { Component } from "react";
import imgSign from "../../assets/img/savia.jpg";

import AuthService from "../../services/AuthService";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">This field is required!</div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
      message: "",
    });

    AuthService.login(this.state.username, this.state.password)
      .then(() => {
        this.props.history.push("/product");
        window.location.reload();
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        this.setState({
          loading: false,
          message: resMessage,
        });
      });
  }

  render() {
    return (
      <div
        class="page-header align-items-start min-vh-100"
        style={{
          backgroundImage: `url(${imgSign})`,
        }}
      >
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-12 mx-auto">
              <div className="card z-index-0 fadeIn3 fadeInBottom">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                      Login
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <form role="form" className="text-start">
                    <div className="form-group">
                      <label className="form-label">Tài khoản</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.onChangeUsername}
                        value={this.state.username}
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
                    <div className="form-check form-switch d-flex align-items-center mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        checked
                      />
                      <label
                        className="form-check-label mb-0 ms-3"
                        for="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn bg-gradient-primary w-100 my-4 mb-2"
                        onClick={this.handleLogin}
                      >
                        Sign in
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-center">
                      Không có tài khoản?
                      <a
                        href="/register"
                        className="text-primary text-gradient font-weight-bold"
                      >
                        Đăng ký
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
