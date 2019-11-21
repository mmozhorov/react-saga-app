import Axios from "axios";

const baseUrl = "https://test-api.dengiclick.kz";

export const getAuth = (user) => {
    const url = baseUrl + "/api/login";
    return Axios.post(
        url,
        user
    );
};