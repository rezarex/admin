import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProjects = async () => {
    const response =await axios.get(`${base_url}projects`);
    return response.data
}

const projectsService = {
    getProjects,
};

export default projectsService;
