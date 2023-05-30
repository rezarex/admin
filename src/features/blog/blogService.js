import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/conf";


const getBlogs = async () => {
    const response =await axios.get(`${base_url}posts`);
    return response.data
}

const createBlog = async (blog) => {
    const response =await axios.post(`${base_url}posts/create`, blog, config);
    return response.data
}

const updateBlog = async (id, blog) => {
    const response =await axios.put(`${base_url}posts/${id}`,blog, config);
    return response.data
}

const getBlog = async (id) => {
    const response =await axios.get(`${base_url}posts/${id}`, config);
    return response.data
}

const blogService = {
    getBlogs,
    createBlog,
    getBlog,
    updateBlog,
};

export default blogService;
