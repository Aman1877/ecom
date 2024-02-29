import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { SignInValidationSchema } from "../../schema/auth-schema";
import { SignInTypes } from "../../models/auth";
import { TOAST_OBJ } from "../../constants/toast-constants";
import { addUser } from "../../store/user/user-slice";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues: SignInTypes = {
    email: "",
    password: "",
  };

  const onSubmit = (values: SignInTypes) => {
    const hashUserInfo = Cookies.get("userInfo") as string;
    const userInfo = JSON.parse(hashUserInfo);
    const checkPassword = values.password !== atob(userInfo.hashPassword);
    const checkEmail = values.email !== atob(userInfo.hashEmail);
    if (!hashUserInfo || (checkPassword && checkEmail)) {
      toast.error("User not found or sign up for an account", { ...TOAST_OBJ });
    } else if (checkPassword) {
      toast.error("Invalid Password", { ...TOAST_OBJ });
    } else if (checkEmail) {
      toast.error("Invalid Email", { ...TOAST_OBJ });
    } else {
      toast.success("Login Successfully", { ...TOAST_OBJ });
      navigate("/home");
    }
    dispatch(
      addUser({
        userName: atob(userInfo.hashUserName),
        email: atob(userInfo.hashEmail),
      })
    );
  };

  return (
    <div className="background-radial-gradient flex justify-center items-center h-screen w-screen">
      <div className="glass w-full sm:w-11/12 md:w-2/4 lg:w-1/3 xl:w-1/4 shadow-md p-5">
        <h2 className="text-3xl text-center">Sign In</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInValidationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="max-w-sm mx-auto mt-8">
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
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed mb-4 sm:mb-0"
                >
                  Sign In
                </button>
                <Link className="text-sm text-black self-center" to="/signup">
                  Don't have an account?
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
