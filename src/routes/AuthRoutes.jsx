import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/LoginPage/LoginPage";
import Register from "../pages/RegisterPage/RegisterPage";
import ForgetPassword from "../pages/ForgetPage/ForgetPage";
import OTP from "../pages/OTPPage/OTPPage";
import ResetPassword from "../pages/ResetPasswordPage/ResetPasswordPage";

export const AuthRoutes = () => {
  return (
    <Routes element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="otp" element={<OTP />} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Routes>
  );
};
