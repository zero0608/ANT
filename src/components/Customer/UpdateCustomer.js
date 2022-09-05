import React, { Component } from "react";
import CustomerService from "../../services/CustomerService";

class UpdateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      customer_name: "",
      customer_phone: "",
      customer_address: "",
    };
    // this.changeCusIdHandler = this.changeCusIdHandler.bind(this);
    this.changeCusNameHandler = this.changeCusNameHandler.bind(this);
    this.changeCusPhoneHandler = this.changeCusPhoneHandler.bind(this);
    this.changeCusAddressHandler = this.changeCusAddressHandler.bind(this);
    this.cancel = this.cancel.bind(this);
    this.updateCustomer = this.updateCustomer.bind(this);
  }

  componentDidMount() {
    CustomerService.getCustomerId(this.state.id).then((res) => {
      let customer = res.data;
      this.setState({
        customer_name: customer.customer_name,
        customer_phone: customer.customer_phone,
        customer_address: customer.customer_address,
      });
    });
  }

  updateCustomer(e) {
    e.preventDefault();
    let customer = {
      customer_name: this.state.customer_name,
      customer_phone: this.state.customer_phone,
      customer_address: this.state.customer_address,
    };
    // console.log("customer", JSON.stringify(customer));
    CustomerService.updateCustomer(customer, this.state.id).then((res) => {
      this.props.history.push("/customer");
    });
  }

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
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
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
                    onClick={this.updateCustomer}
                    style={{ margin: "10px 0 0 0px" }}
                  >
                    Cập nhật
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

export default UpdateCustomer;
