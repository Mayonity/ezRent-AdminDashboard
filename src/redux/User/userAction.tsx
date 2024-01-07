"use-client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addUserEndPoint,searchUserEndPoint,showUserEndPoint,updateUserEndPoint} from '../../constants/endPointConstants'
import { toast } from 'react-toastify';
import {getToken} from '../../utils/getToken';

export const addUser = createAsyncThunk(
    'user/add',
    async (userData: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.post(addUserEndPoint, userData, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
            toast.success(response.data.message);
            return response.data.user;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Add User failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const showUsers = createAsyncThunk(
    'user/all',
    async (_, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.get(showUserEndPoint,{
                headers: {
              
                    'Authorization': `Bearer ${token}` 
                }
            })
            return response.data.users;
        } catch (error: any) {
            if (error.response) {
                console.log(error.message)
                toast.error(error.response.data.message || "Users fetch failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/update',
    async (userData: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.put(updateUserEndPoint, userData, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
          
            toast.success(response.data.message);
            return response.data.updatedUser;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Update User failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const searchUsers = createAsyncThunk(
    'user/search',
    async (userData: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.post(searchUserEndPoint, userData, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
          
            toast.success(response.data.message);
            return response.data.users;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Update User failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);