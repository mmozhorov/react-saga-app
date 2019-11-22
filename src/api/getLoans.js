import Axios from "axios";
import { baseUrl } from "../config";

export const getLoansRequest = (token) => {
    const url = baseUrl + "/api/loans";
    return Axios.get(
        url,
        { headers: { 'Authorization': "Bearer " + token } }
    );
};