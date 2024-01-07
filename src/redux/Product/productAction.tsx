"use-client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addProductEndPoint,deleteProductEndPoint,searchProductEndPoint,showProductEndPoint,updateProductEndPoint} from '../../constants/endPointConstants'
import { toast } from 'react-toastify';
import {getToken} from '../../utils/getToken';

export const addProduct = createAsyncThunk(
    'product/add',
    async (productData: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.post(addProductEndPoint, productData, {
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
          
            toast.success(response.data.message);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Add product failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const showProducts = createAsyncThunk(
    'product/all',
    async (_, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.get(showProductEndPoint,{
                headers: {
              
                    'Authorization': `Bearer ${token}` 
                }
            })
            return response.data.products;
        } catch (error: any) {
            if (error.response) {
                toast.error(error.response.data.message || "Products fetch failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const updateProduct = createAsyncThunk(
    'product/update',
    async (productData: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.put(updateProductEndPoint, productData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                }
            });
          
            toast.success(response.data.message);
            return response.data.updatedProduct;
        } catch (error: any) {
            console.log(error.message, 'error message')
            if (error.response) {
                toast.error(error.response.data.message || "Update product failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);

export const searchProducts = createAsyncThunk(
    'product/search',
    async (productData: any, { rejectWithValue }) => {
        try {
            const token = getToken(); 
            const response = await axios.post(searchProductEndPoint, productData, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
          
            toast.success(response.data.message);
            return response.data.products;
        } catch (error: any) {
            if (error.response) {
                console.log(error.message)
                toast.error(error.response.data.message || "Search Product failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);


export const deleteProduct = createAsyncThunk(
    'product/delete',
    async (productData: any, { rejectWithValue }) => {
        console.log(productData, 'productData')
        try {
            const token = getToken(); 
            const response = await axios.post(deleteProductEndPoint, productData, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });
          
            toast.success(response.data.message);
            return ;
        } catch (error: any) {
            if (error.response) {
                console.log(error.message)
                toast.error(error.response.data.message || "Delete Product failed");
                return rejectWithValue(error.response.data);
            } else {
                toast.error("Network error");
                return rejectWithValue(error.message);
            }
        }
    }
);