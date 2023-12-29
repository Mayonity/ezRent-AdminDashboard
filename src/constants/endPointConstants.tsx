const baseUrl = process.env.REACT_APP_API_ENDPOINT;


export const authLogin = `${baseUrl}/auth/login`;
export const authForgotPassword = `${baseUrl}/auth/forgot-password`;
export const authResetPassword = `${baseUrl}/auth/reset-password`;
export const addCategoryEndPoint = `${baseUrl}/categories/create`;
export const showCategoryEndPoint = `${baseUrl}/categories/all`;
