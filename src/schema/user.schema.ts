import * as yup from "yup";

export const signupSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const loginSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const refreshTokenSchema = yup.object({
  refreshToken: yup.string().required("Refresh Token is required"),
});
