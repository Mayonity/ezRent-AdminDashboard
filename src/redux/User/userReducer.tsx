import { createSlice } from "@reduxjs/toolkit";
import { addUser, showUsers, updateUser} from './userAction'


interface UserState {
    users: any[];
    loading: boolean;
    error: string | null | undefined;
}
const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(showUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


    },

});

export default userSlice.reducer;