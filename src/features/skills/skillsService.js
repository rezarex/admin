import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/conf";

const getSkills = async () => {
    const response =await axios.get(`${base_url}skills`);
    return response.data
}

const createSkill = async (skill) => {
    const response =await axios.post(`${base_url}skills/add`, skill, config);
    return response.data
}


const skillsService = {
    getSkills,
    createSkill,
};

export default skillsService;