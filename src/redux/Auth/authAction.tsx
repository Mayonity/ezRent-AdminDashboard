"use-client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authLogin, authForgotPassword, authResetPassword } from '../../constants/endPointConstants'
import { toast } from 'react-toastify';


// Async action for user login
export const login = createAsyncThunk(
    'auth/login',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(authLogin, userData);
            const { user } = response.data
            localStorage.setItem('user', JSON.stringify(user))
            toast.success(response.data.message);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Login failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);


export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(authForgotPassword, userData); 
            toast.success(response.data.message);
            return response.data;
        } catch (error : any) {
            if (error.response) {
                toast.error(error.response.data.message || "Some Error Occur");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post(authResetPassword, userData); 
            toast.success(response.data.message);
            return response.data;
        } catch (error : any) {
            if (error.response) {
                // toast.error(error.response.data.message || "Some Error Occur");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);
// You can add more async actions here like register, logout, etc.
