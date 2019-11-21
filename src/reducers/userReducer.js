import auth from "../constants/auth";

const {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILED
} = auth;

const initialState = {
    isGuest: true,
    isLoading: false,
    isError: false,
    user: {}
};

export default (state = initialState, { type, isLoading, isError, error, user}) => {
    switch (type) {
        case AUTH_REQUEST:
            return {
                ...state,
                isLoading,
                isError
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                isLoading,
                isError,
                user: user
            };
        case AUTH_FAILED:
            return {
                ...state,
                isLoading,
                isError,
                error
            };
        default:
            return state;
    }
};