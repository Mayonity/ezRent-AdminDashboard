import { createSlice } from "@reduxjs/toolkit";
import { login, forgotPassword, resetPassword } from './authAction'

const initialState = {
    isLoggedIn: false,
    user: null,
    loading: false,
    error: null,
    success: false,
    isMailSend: false,
    loginErrors: {
        email: null,
        password: null
    },
    forgotErrors: {
        email: null
    },
    resetErrors: {
        password: null,
        confirmPassword: null
    },

};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.loginErrors = {
                    email: null,
                    password: null,

                };
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.loading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                if (action.payload && (action.payload as any).message) {
                    state.loginErrors = {
                        email: (action.payload as any).message === 'user not found' || (action.payload as any).message === 'invalid email format' ? (action.payload as any).message : null,
                        password: (action.payload as any).message === 'incorrect password' ? (action.payload as any).message : null,
                    }
                } else {
                    state.loginErrors = {
                        email: null,
                        password: null,
                    };
                }
            })

            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.forgotErrors = {
                    email: null,
                };
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.isMailSend = true
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false;
                if (action.payload && (action.payload as any).message) {
                    state.forgotErrors = {
                        email: (action.payload as any).message === 'invalid email format' || (action.payload as any).message === 'user not found' ? (action.payload as any).message : null,
                    }
                } else {
                    state.forgotErrors = {
                        email: null,
                    };
                }
            })
            .addCase(resetPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.resetErrors = {
                    password: null,
                    confirmPassword: null
                };
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.loading = false;
                if (action.payload && (action.payload as any).message) {
                    state.resetErrors = {
                        password: (action.payload as any).message === 'password is required' ? (action.payload as any).message : null,
                        confirmPassword: (action.payload as any).message === 'password does not match' ? (action.payload as any).message : null
                    };
                } else {
                    state.resetErrors = {
                        password: null,
                        confirmPassword: null
                    };
                }
            })
    },

});

export const { logout } = authSlice.actions;
export default authSlice.reducer;