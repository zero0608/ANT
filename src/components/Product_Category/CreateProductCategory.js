import React, { Component } from "react";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import ProductCategoryService from "../../services/ProductCategoryService";

class CreateProductCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_category_name: "",
    };
    this.changeProductCatHandler = this.changeProductCatHandler.bind(this);
    this.saveProductCat = this.saveProductCat.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  saveProductCat(e) {
    e.preventDefault();
    let product_category = {
      product_category_name: this.state.product_category_name,
    };

    ProductCategoryService.createProductCat(product_category).then((res) => {
      this.props.history.push("/product_category");
    });
  }

  changeProductCatHandler(event) {
    this.setState({ product_category_name: event.target.value });
  }

  cancel() {
    this.props.history.push("/product_category");
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
            <h3 className="text-center">Thêm thể loại</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Tên thể loại:</label>
                  <input
                    placeholder="Tên thể loại"
                    name="product_category_name"
                    className="form-control"
                    value={this.state.product_category_name}
                    onChange={this.changeProductCatHandler}
                    required
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={this.saveProductCat}
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

export default CreateProductCategory;
