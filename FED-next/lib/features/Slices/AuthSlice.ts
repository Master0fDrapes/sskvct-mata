// src/redux/apiSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface APIState<T = any> {
  loading: boolean;
  data: T | null;
  error: string | null;
}

// Generic API request thunk
export const apiRequest = createAsyncThunk<
  any, // response type
  { endpoint: string; method?: string; body?: any; headers?: any },
  { rejectValue: string }
>(
  "api/request",
  async ({ endpoint, method = "GET", body, headers }, thunkAPI) => {
    try {
      const res = await fetch(`https://yourapi.com${endpoint}`, {
        method,
        headers: { "Content-Type": "application/json", ...headers },
        body: body ? JSON.stringify(body) : undefined,
        credentials: "include", // secure cookie support
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Request failed");
      }

      return await res.json();
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState: APIState = {
  loading: false,
  data: null,
  error: null,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    clearApiData: (state) => {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(apiRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { clearApiData } = apiSlice.actions;
export default apiSlice.reducer;
