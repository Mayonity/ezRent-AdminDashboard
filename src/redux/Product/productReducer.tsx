import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, searchProducts, showProducts, updateProduct} from './productAction'


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
                const updatedProduct = action.payload;
                const existingIndex = state.products.findIndex(product => product.id === updatedProduct.id);
            
                if (existingIndex !== -1) {
                    // If the product exists in the state, update it
                    state.products[existingIndex] = updatedProduct;
                } else {
                    // If the product doesn't exist, add it to the state
                    state.products.push(updatedProduct);
                }
            
                state.loading = false;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(searchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(searchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                // state.products = action.payload;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


    },

});

export default productSlice.reducer;