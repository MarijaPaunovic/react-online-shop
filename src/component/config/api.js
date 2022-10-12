import axios from "axios";

export default axios.create({
    baseURL: "https://30hills.com/api/products.json"
})