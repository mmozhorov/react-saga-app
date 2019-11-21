import Axios from "axios";
import { baseUrl } from "../config";

export const getLoansRequest = (user) => {
    const url = baseUrl + "/api/loans";
    const token = user.token;
    return Axios.get(
        url,
        { headers: { 'Authorization': "Bearer " + token } }
    );
};