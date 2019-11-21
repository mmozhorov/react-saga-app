import auth from "../constants/auth";
const {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILED,
    LOGOUT_REQUEST
} = auth;

export const userRequest = data => ({
    type: AUTH_REQUEST,
    isLoading: true,
    isError: false,
    data
});

export const userSuccess = user => ({
    type: AUTH_SUCCESS,
    isLoading: false,
    isError: false,
    isGuest: false
});

export const userFailed = error => ({
    type: AUTH_FAILED,
    isLoading: false,
    isError: true,
    error
});

export const logout = () => ({
    type: LOGOUT_REQUEST,
    isLoading: false,
    isError: false,
    isGuest: true
});