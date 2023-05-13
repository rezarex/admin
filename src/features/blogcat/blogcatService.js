import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/conf";


const getCategory = async () => {
    const response =await axios.get(`${base_url}category`);
    return response.data
}

const createCategory = async (category) => {
    const response =await axios.post(`${base_url}category/add`, category, config);
    return response.data
}

const categoryService = {
    getCategory,
    createCategory,
};

export default categoryService;
