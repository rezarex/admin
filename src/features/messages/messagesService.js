import axios from "axios";
import { base_url } from "../../utils/base_url";


const getMessages = async () => {
    const response =await axios.get(`${base_url}messages`);
    //console.log(getTokenFromLocalStorage.token);
    return response.data
}

const messagesService = {
    getMessages,
};

export default messagesService;
