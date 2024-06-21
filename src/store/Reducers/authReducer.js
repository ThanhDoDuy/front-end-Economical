import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info, { fulfillWithValue ,rejectWithValue }) => {
        try {
            const { data } = await api.post('admin/login', info, { withCredentials: true });
            console.log(data)
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: '',
        status: 'idle',
        accessToken: null,
        refreshToken: null,
        error: null,
    },
    reducers: {
        messageClear: (state, _ ) => {
            state.errorMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state, { payload }) => {
                state.loader = true;
                state.status = 'loading';
                state.successMessage = '';

            })
            .addCase(admin_login.fulfilled, (state, action) => {
                state.loader = false;
                state.status = 'succeeded';
                state.successMessage = action.payload.message;
                state.user = action.payload.metadata.admin;
                state.accessToken = action.payload.metadata.tokens.accessToken;
                state.refreshToken = action.payload.metadata.tokens.refreshToken;
            })
            .addCase(admin_login.rejected, (state, action) => {
                state.loader = false;
                state.status = 'failed';
                state.errorMessage = action.payload.message;
                state.error = action.payload;
            });
    },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;