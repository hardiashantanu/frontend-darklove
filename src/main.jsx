import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'; // Import the store
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import Verify_phone_OTP from './components/Verify_phone_Otp.jsx';
import Question1 from './pages/Q&A.jsx';
import AdvisorApplication from './pages/Application_form.jsx';
import DisclaimerPage from './components/Auth/DisclaimerPage.jsx';
// import EmailVerificationPage from './components/Auth/VerifyOTP.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/login",
        element: <AuthPage />
      },
      {
        path: "/Question",
        element: <Question1 />
      },
      {
        path: "/verify-otp",
        element: <Verify_phone_OTP />
      },
      {
        path: "/application",
        element: <AdvisorApplication />
      },
      {
      path: "/disclaimer",
      element: <DisclaimerPage /> // Add DisclaimerPage route
    },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Add the store as a prop */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
