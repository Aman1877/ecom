import React from "react";
import Cookies from 'js-cookie';
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../../styles/styles.css"
import { SignUpTypes } from "../../models/auth"
import { SignUpValidationSchema } from "../../schema/auth-schema"
import { toast } from "react-toastify";
import { TOAST_OBJ } from '../../constants/toast-constants';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const initialValues: SignUpTypes = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values: SignUpTypes) => {
    if (values.username) {
      const hashUserInfo = {
        hashUserName: btoa(values.username),
        hashEmail: btoa(values.email),
        hashPassword: btoa(values.password),
      };
      Cookies.set("userInfo", JSON.stringify(hashUserInfo));
    }
    toast.success("Register Successfully..!",{...TOAST_OBJ})
    navigate("/");
  };

  return (
    <div className="background-radial-gradient flex justify-center items-center h-screen w-screen">
      <div className="glass w-full sm:w-11/12 md:w-2/4 lg:w-1/3 xl:w-1/4 shadow-md p-5">
        <h2 className="text-3xl text-center">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpValidationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="max-w-sm mx-auto mt-8">
              <div className="mb-4">
                <label htmlFor="username" className="block mb-2">
                  Username <em className="text-red-500">*</em>
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="border p-2 w-full"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email <em className="text-red-500">*</em>
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="border p-2 w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                  Password <em className="text-red-500">*</em>
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="border p-2 w-full"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block mb-2">
                  Confirm Password <em className="text-red-500">*</em>
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="border p-2 w-full"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed mb-4 sm:mb-0"
                >
                  Sign Up
                </button>
                <Link className="text-sm text-black self-center" to="/">
                  Already have an account?
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;