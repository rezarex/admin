import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/conf";

const getProjects = async () => {
    const response =await axios.get(`${base_url}projects`);
    return response.data
}

const createProjects = async (project) => {
    const response =await axios.post(`${base_url}projects/add`, project, config);
    return response.data
}
const projectsService = {
    getProjects,
    createProjects,
};

export default projectsService;
