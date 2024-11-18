// // src/store/auth/authActions.js
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/v1/users';

// // Function to log errors
// const logError = (error) => {
//   console.error('Error:', error);
//   console.error('Error Details:', error.response ? error.response.data : 'No response data');
//   return error.response?.data?.message || 'An error occurred';
// };

// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}/register`, userData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       });
//       return response.data.data;
//     } catch (error) {
//       logError(error);
//       return rejectWithValue(logError(error));
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}/login`, credentials, {
//         withCredentials: true,
//       });
//       return response.data.data;
//     } catch (error) {
//       logError(error);
//       return rejectWithValue(logError(error));
//     }
//   }
// );

// // export const verifyOTP = createAsyncThunk(
// //   'auth/verifyOTP',
// //   async ({ userId, otp }, { rejectWithValue }) => {
// //     try {
// //       const response = await axios.post(`${API_URL}/verify-otp`, { userId, otp }, {
// //         withCredentials: true,
// //       });
// //       return response.data.data;
// //     } catch (error) {
// //       logError(error);
// //       return rejectWithValue(logError(error));
// //     }
// //   }
// // );
// export const verifyOTP = createAsyncThunk(
//   'auth/verifyOTP',
//   async ({ userId, otp }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`http://localhost:8000/api/v1/users/verify-otp`, { userId, otp }, {
//         withCredentials: true,
//       });
//       return response.data.data; // Returns verified user data
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to verify OTP');
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   'auth/logoutUser',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}/logout`, {}, {
//         withCredentials: true,
//       });
//       return response.data.data;
//     } catch (error) {
//       logError(error);
//       return rejectWithValue(logError(error));
//     }
//   }
// );

// export const refreshAccessToken = createAsyncThunk(
//   'auth/refreshAccessToken',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}/refresh-token`, {}, {
//         withCredentials: true,
//       });
//       return response.data.data;
//     } catch (error) {
//       logError(error);
//       return rejectWithValue(logError(error));
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/users';

// Function to log errors
const logError = (error) => {
  console.error('Error:', error);
  console.error('Error Details:', error.response ? error.response.data : 'No response data');
  return error.response?.data?.message || 'An error occurred';
};

// Register user
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      logError(error);
      return rejectWithValue(logError(error));
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      logError(error);
      return rejectWithValue(logError(error));
    }
  }
);

// Verify phone OTP
export const verifyPhoneOtp = createAsyncThunk(
  'auth/verifyPhoneOtp',
  async ({ userId, otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/verify-phone-otp`, { userId, otp }, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to verify phone number');
    }
  }
);

// Verify email OTP (for future use in profile update)
export const verifyEmailOtp = createAsyncThunk(
  'auth/verifyEmailOtp',
  async ({ userId, otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/verify-email-otp`, { userId, otp }, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to verify email');
    }
  }
);

// Logout user
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/logout`, {}, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      logError(error);
      return rejectWithValue(logError(error));
    }
  }
);

// Refresh access token
export const refreshAccessToken = createAsyncThunk(
  'auth/refreshAccessToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/refresh-token`, {}, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      logError(error);
      return rejectWithValue(logError(error));
    }
  }
);
