import { createSlice } from "@reduxjs/toolkit";
import { addProduct, showProducts, updateProduct} from './productAction'


interface ProductState {
    products: any[];
    loading: boolean;
    error: string | null | undefined;
}
const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(showProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(showProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(showProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false;
                state.products.push(action.payload);
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


    },

});

export default productSlice.reducer;