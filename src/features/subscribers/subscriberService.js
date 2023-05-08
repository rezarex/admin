import axios from "axios";
import { base_url } from "../../utils/base_url";

const getSubscribers = async () => {
    const response =await axios.get(`${base_url}subscriber`);
    return response.data
}

const subscriberService = {
    getSubscribers,
};

export default subscriberService;
