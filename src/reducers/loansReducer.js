import loans from "../constants/loans";

const {
    LOANS_REQUEST,
    LOANS_SUCCESS,
    LOANS_FAILED
} = loans;

const initialState = {
    isLoading: false,
    isError: false,
    loans: []
};

export default (state = initialState, { type, isLoading, isError, error, loans}) => {
    switch (type) {
        case LOANS_REQUEST:
            return {
                ...state,
                isLoading,
                isError
            };
        case LOANS_SUCCESS:
            return {
                ...state,
                isLoading,
                isError,
                loans
            };
        case LOANS_FAILED:
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