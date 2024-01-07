const baseUrl = process.env.REACT_APP_API_ENDPOINT;


export const authLogin = `${baseUrl}/auth/login`;
export const authForgotPassword = `${baseUrl}/auth/forgot-password`;
export const authResetPassword = `${baseUrl}/auth/reset-password`;
export const addCategoryEndPoint = `${baseUrl}/categories/create`;
export const showCategoryEndPoint = `${baseUrl}/categories/all`;
export const updateCategoryEndPoint = `${baseUrl}/categories/update`;
export const addUserEndPoint = `${baseUrl}/users/create`;
export const showUserEndPoint = `${baseUrl}/users/all`;
export const updateUserEndPoint = `${baseUrl}/users/update`;
export const searchUserEndPoint = `${baseUrl}/users/search`
export const addProductEndPoint = `${baseUrl}/products/create`;
export const showProductEndPoint = `${baseUrl}/products/all`;
export const updateProductEndPoint = `${baseUrl}/products/update`;
export const searchProductEndPoint = `${baseUrl}/products/search`
export const deleteProductEndPoint = `${baseUrl}/products/delete`