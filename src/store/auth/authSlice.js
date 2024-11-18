// import { createSlice } from '@reduxjs/toolkit';
// import { registerUser, loginUser, verifyOTP, logoutUser, refreshAccessToken } from './authActions';

// const initialState = {
//   user: null,
//   accessToken: null,
//   refreshToken: null,
//   isLoading: false,
//   error: null,
//   activeTab: 'login', // Initial tab state
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//     clearAuth: (state) => {
//       state.user = null;
//       state.accessToken = null;
//       state.refreshToken = null;
//     },
//     setActiveTab: (state, action) => {
//       state.activeTab = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Handle registerUser
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.userId;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       // Handle loginUser
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.accessToken = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       // Handle verifyOTP
//       .addCase(verifyOTP.pending, (state) => {
//         state.isLoading = true;
//         state.error = null; // Clear any previous errors
//       })
//       .addCase(verifyOTP.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload; // Update the user state with verified user data
//       })
//       .addCase(verifyOTP.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload; // Update the error state with the rejection message
//       })
//       // Handle logoutUser
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.user = null;
//         state.accessToken = null;
//         state.refreshToken = null;
//       })
//       .addCase(refreshAccessToken.fulfilled, (state, action) => {
//         state.accessToken = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;
//       });
//   },
// });

// export const { setUser, clearAuth, setActiveTab } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  verifyPhoneOtp,
  verifyEmailOtp,
  logoutUser,
  refreshAccessToken,
} from './authActions';

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
  activeTab: 'login', // Initial tab state
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle registerUser
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.userId;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handle loginUser
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handle verifyPhoneOtp
      .addCase(verifyPhoneOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(verifyPhoneOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...state.user, isPhoneVerified: true }; // Update the user state with phone verified
      })
      .addCase(verifyPhoneOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handle verifyEmailOtp
      .addCase(verifyEmailOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(verifyEmailOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...state.user, isEmailVerified: true }; // Update the user state with email verified
      })
      .addCase(verifyEmailOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handle logoutUser
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handle refreshAccessToken
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      });
  },
});

export const { setUser, clearAuth, setActiveTab } = authSlice.actions;
export default authSlice.reducer;
