import axios from "axios";
const PROVIDER_API_BASE_URL = "http://localhost:8080/api/provider";

class ProductCategoryService {
  getProvider() {
    return axios.get(PROVIDER_API_BASE_URL);
  }
}

export default new ProductCategoryService();
