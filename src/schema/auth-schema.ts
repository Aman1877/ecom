import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm Password is required"),
});

export const SignInValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
});
