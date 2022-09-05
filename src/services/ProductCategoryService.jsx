import axios from "axios";
const PRODUCT_CATEGORY_API_BASE_URL =
  "http://localhost:8080/api/product_category";
const PRODUCT_CATEGORY_API_BASE_URL_CREATE =
  "http://localhost:8080/api/product_category/create";

class ProductCategoryService {
  getProductCat() {
    return axios.get(PRODUCT_CATEGORY_API_BASE_URL);
  }

  createProductCat(product_category) {
    return axios.post(PRODUCT_CATEGORY_API_BASE_URL_CREATE, product_category);
  }
}

export default new ProductCategoryService();
