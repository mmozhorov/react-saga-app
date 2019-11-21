import auth from "../constants/auth";

const {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILED,
    LOGOUT_REQUEST
} = auth;

const initialState = {
    isGuest: true,
    isLoading: false,
    isError: false,
    user: {}
};

export default (state = initialState, { type, isLoading, isError, error, isGuest}) => {
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
                isGuest
            };
        case AUTH_FAILED:
            return {
                ...state,
                isLoading,
                isError,
                error
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading,
                isError,
                isGuest
            };
        default:
            return state;
    }
};