import axios from "axios";
import { base_url } from "../../utils/base_url";

const getMembers = async () => {
    const response =await axios.get(`${base_url}auth/allusers`);
    return response.data
}

const membersService = {
    getMembers,
};

export default membersService;