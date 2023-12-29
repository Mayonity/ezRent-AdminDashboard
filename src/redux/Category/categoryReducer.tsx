import { createSlice } from "@reduxjs/toolkit";
import { addCategory, showCategories} from './categoryAction'


interface CategoryState {
    categories: any[];
    loading: boolean;
    error: string | null | undefined;
}
const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: null,
};



export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(addCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories.push(action.payload);
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(showCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(showCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(showCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


    },

});

export default categorySlice.reducer;