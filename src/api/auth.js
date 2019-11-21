import Axios from "axios";
import { baseUrl } from "../config";

export const getAuth = (user) => {
    const url = baseUrl + "/api/login";
    return Axios.post(
        url,
        user
    );
};