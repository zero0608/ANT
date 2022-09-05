import "./App.css";
import React from "react";
import ListEmployee from "./components/Employee/ListEmployee";
// import Header from "./components/Layout/Header";
// import Sidebar from "./components/Layout/Sidebar";
import Home from "./components/Layout/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployee from "./components/Employee/CreateEmployee";
import UpdateEmployee from "./components/Employee/UpdateEmployee";
import ViewEmployee from "./components/Employee/ViewEmployee";
import ListCustomer from "./components/Customer/ListCustomer";
import CreateCustomer from "./components/Customer/CreateCustomer";
import UpdateCustomer from "./components/Customer/UpdateCustomer";
// import Login from "./components/Login/Login";
// import Register from "./components/Login/Register";
import ListProductCategory from "./components/Product_Category/ListProductCategory";
import CreateProductCategory from "./components/Product_Category/CreateProductCategory";
import ListProvider from "./components/Provider/ListProvider";
import ListProduct from "./components/Product/ListProduct";
import ListBill from "./components/Bill/ListBill";
import ListStore from "./components/Store/ListStore";
import ListBillDetail from "./components/Bill_Detail/ListBillDetail";
import ListBillReturn from "./components/Bill_Return/ListBillReturn";
import SellProduct from "./components/Sell/SellProduct";
import NewBill from "./components/Create_Bill/NewBill";

function App() {
  return (
    <div>
      <Router>
        <div className="container">{/* <Sidebar /> */}</div>

        <div>
          <div>
            {/* <Header /> */}
            <Switch>
              <Route path={"/sell"} component={SellProduct} />
              <Route path={"/home"} component={Home} />

              {/* <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route> */}
              {/* nhân viên */}
              <Route
                path="/employees/add_employee"
                component={CreateEmployee}
              ></Route>
              <Route path="/employees" component={ListEmployee}></Route>

              <Route
                path="/employees/edit_employee/:id"
                component={UpdateEmployee}
              ></Route>
              <Route
                path="/employees/view_employee/:id"
                component={ViewEmployee}
              ></Route>

              {/* khách hàng */}
              <Route
                path="/customer/add_customer"
                component={CreateCustomer}
              ></Route>
              <Route path="/customer" component={ListCustomer}></Route>

              <Route
                path="/customer/edit_customer/:id"
                component={UpdateCustomer}
              ></Route>

              {/* thể loại */}
              <Route path="/product_category/add_product_category">
                <CreateProductCategory />
              </Route>
              <Route
                path="/product_category"
                component={ListProductCategory}
              ></Route>

              {/* nhà cung cấp */}
              <Route path="/provider" component={ListProvider}></Route>

              {/* sản phẩm */}
              <Route path="/product" component={ListProduct}></Route>

              {/* hóa đơn */}
              <Route path="/bill" component={ListBill}></Route>
              <Route path="/create_bill" component={NewBill}></Route>

              {/* nhập kho */}
              <Route path="/store" component={ListStore}></Route>

              {/* hóa đơn trả hàng */}
              <Route path="/bill_return" component={ListBillReturn}></Route>

              {/* hóa đơn chi tiết */}
              <Route path="/bill_detail" component={ListBillDetail}></Route>
            </Switch>
            {/* <Footer /> */}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
