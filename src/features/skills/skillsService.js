import axios from "axios";
import { base_url } from "../../utils/base_url";

const getSkills = async () => {
    const response =await axios.get(`${base_url}skills`);
    return response.data
}

const skillsService = {
    getSkills,
};

export default skillsService;