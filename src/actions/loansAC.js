import loans from "../constants/loans";
const {
    LOANS_REQUEST,
    LOANS_SUCCESS,
    LOANS_FAILED
} = loans;

export const loansRequest = data => ({
    type: LOANS_REQUEST,
    isLoading: true,
    isError: false,
    data
});

export const loansSuccess = user => ({
    type: LOANS_SUCCESS,
    isLoading: false,
    isError: false,
    isGuest: false
});

export const loansFailed = error => ({
    type: LOANS_FAILED,
    isLoading: false,
    isError: true,
    error
});