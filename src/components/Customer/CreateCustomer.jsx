import React, { Component } from "react";
import CustomerService from "../../services/CustomerService";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";

function FormError(props) {
  if (props.isHidden) {
    return null;
  }
  return <div className="text-danger">{props.errorMessage}</div>;
}

const validatePhone = (checkingPhone) => {
  var regexp = /((09|03|07|08|05|02)+([0-9]{8})\b)/g;
  if (regexp.exec(checkingPhone) !== null) {
    return {
      isInputValid: true,
      errorMessage: "",
    };
  } else {
    return {
      isInputValid: false,
      errorMessage: "Số điện thoại không đúng định dạng",
    };
  }
};

class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // customer_id: "",
      customer_name: "",
      customer_phone: "",
      customer_address: "",
      isInputValid: true,
      errorMessage: "",
    };
    // this.changeCusIdHandler = this.changeCusIdHandler.bind(this);
    this.changeCusNameHandler = this.changeCusNameHandler.bind(this);
    this.changeCusPhoneHandler = this.changeCusPhoneHandler.bind(this);
    this.changeCusAddressHandler = this.changeCusAddressHandler.bind(this);
    this.cancel = this.cancel.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
    this.handleInputValidation = this.handleInputValidation.bind(this);
  }

  // handleInput(event) {
  //   const { value } = event.target;
  //   this.setState({ value });
  // }

  handleInputValidation(event) {
    const { isInputValid, errorMessage } = validatePhone(
      this.state.customer_phone
    );
    this.setState({
      isInputValid: isInputValid,
      errorMessage: errorMessage,
    });
  }

  saveCustomer(e) {
    e.preventDefault();
    let customer = {
      // customer_id: this.state.customer_id,
      customer_name: this.state.customer_name,
      customer_phone: this.state.customer_phone,
      customer_address: this.state.customer_address,
    };

    CustomerService.createCustomer(customer).then((res) => {
      this.props.history.push("/customer");
    });
  }

  // changeCusIdHandler(event) {
  //   this.setState({ customer_id: event.target.value });
  // }

  changeCusNameHandler(event) {
    this.setState({ customer_name: event.target.value });
  }

  changeCusPhoneHandler(event) {
    this.setState({ customer_phone: event.target.value });
  }

  changeCusAddressHandler(event) {
    this.setState({ customer_address: event.target.value });
  }

  cancel() {
    this.props.history.push("/customer");
  }

  render() {
    return (
      <div className="container">
        <Sidebar />
        <div className="row" style={{ marginLeft: "120px" }}>
          <Header />
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={{ marginTop: "50px" }}
          >
            <h3 className="text-center">Thêm khách hàng</h3>
            <div className="card-body">
              <form>
                {/* <div className="form-group">
                    <label>Mã khách hàng:</label>
                    <input
                      placeholder="Mã khách hàng"
                      name="customer_id"
                      className="form-control"
                      value={this.state.customer_id}
                      onChange={this.changeCusIdHandler}
                      required
                    />
                  </div> */}
                <div className="form-group">
                  <label>Tên khách hàng:</label>
                  <input
                    placeholder="Tên khách hàng"
                    name="customer_name"
                    className="form-control"
                    value={this.state.customer_name}
                    onChange={this.changeCusNameHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Số điện thoại:</label>
                  <input
                    placeholder="Số điện thoại"
                    name="customer_phone"
                    className="form-control"
                    value={this.state.customer_phone}
                    onChange={this.changeCusPhoneHandler}
                    required
                    onBlur={this.handleInputValidation}
                  />
                  <FormError
                    isHidden={this.state.isInputValid}
                    errorMessage={this.state.errorMessage}
                  />
                </div>
                <div className="form-group">
                  <label>Địa chỉ:</label>
                  <input
                    placeholder="Địa chỉ"
                    name="customer_address"
                    className="form-control"
                    value={this.state.customer_address}
                    onChange={this.changeCusAddressHandler}
                    required
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={this.saveCustomer}
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
    );
  }
}

export default CreateCustomer;
