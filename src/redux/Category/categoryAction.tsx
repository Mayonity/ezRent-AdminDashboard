"use-client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addCategoryEndPoint,showCategoryEndPoint,updateCategoryEndPoint} from '../../constants/endPointConstants'
import { toast } from 'react-toastify';
import {getToken} from '../../utils/getToken';

export const addCategory = createAsyncThunk(
    'category/add',
    async (categoryData: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.post(addCategoryEndPoint, categoryData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
          
            toast.success(response.data.message);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Add Category failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const showCategories = createAsyncThunk(
    'category/all',
    async (_, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.get(showCategoryEndPoint,{
                headers: {
              
                    'Authorization': `Bearer ${token}` 
                }
            })
            return response.data.categories;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Categories fetch failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const updateCategory = createAsyncThunk(
    'category/update',
    async (categoryData: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.put(updateCategoryEndPoint, categoryData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
          
            toast.success(response.data.message);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Update Category failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);