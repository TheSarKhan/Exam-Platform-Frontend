import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const BASE_URL = import.meta.env.VITE_API_URL;

const initialState = {
  accessToken: Cookies.get("accessToken") || null,
  refreshToken: Cookies.get("refreshToken") || null,
  user: null,
  role: Cookies.get("role") || null,
  loading: false,
  error: null,
  email: "",
};

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, { email, password });

    const accessToken = res.data?.data?.accessToken || res.data.accessToken;
    const refreshToken = res.data?.data?.refreshToken || res.data.refreshToken;
    const role = res.data?.data?.role || res.data.role || null;

    Cookies.set("accessToken", accessToken, { sameSite: "Strict" });
    Cookies.set("refreshToken", refreshToken, { sameSite: "Strict" });
    Cookies.set("role", role, { sameSite: "Strict" });

    return { accessToken, refreshToken, role };
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Login failed");
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      Cookies.remove("role");
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      state.role = null;
      state.email = "";
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      Cookies.set("accessToken", action.payload, { sameSite: "Strict" });
      try {
        const decoded = jwtDecode(action.payload);
        state.user = decoded;
        state.role = decoded.role || decoded["x-role"] || null;
      } catch {
        state.user = null;
        state.role = null;
      }
      state.role = Cookies.get("role") || state.role || null;
    },
    setEmailState: (state, action) => {
      state.email = action.payload; 
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        const { accessToken, refreshToken, role } = action.payload;

        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.role = role;

        try {
          const decoded = jwtDecode(accessToken);
          state.user = decoded;
          state.role = decoded.role || decoded["x-role"] || null;
        } catch {
          state.user = null;
          state.role = null;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setAccessToken,setEmailState } = authSlice.actions;
export default authSlice.reducer;
