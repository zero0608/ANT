import axios from "axios";
const PRODUCT_API_BASE_URL = "http://localhost:8080/api/product";
const PRODUCT_API_BASE_URL_CREATE = "http://localhost:8080/api/product/create";

class ProductService {
  getProduct() {
    return axios.get(PRODUCT_API_BASE_URL);
  }

  createProduct(product_category) {
    return axios.post(PRODUCT_API_BASE_URL_CREATE, product_category);
  }
}

export default new ProductService();
