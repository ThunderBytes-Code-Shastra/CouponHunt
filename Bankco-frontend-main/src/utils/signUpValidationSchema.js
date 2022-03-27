import * as Yup from "yup";

export default signUpValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter your full name"),
  username: Yup.string()
    .trim()
    .matches(/^[a-zA-Z0-9_@\.\-]+$/, "Invalid name input")
    .required("Please enter your name"),
  phone: Yup.string().matches(
    /^[0-9]{10}$/,
    "Please enter a valid mobile number"
  ),
  email: Yup.string().matches(
    /(^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$)/,
    "Please provide a valid email "
  ),
  password: Yup.string()
    .required("Please enter your Password")
    .matches(
      /^[a-zA-Z0-9!@#%^&*+-=]{6,15}$/,
      "Password can only contains 6 to 15 alphabet or number or symbol(!, @, #, %, ^, &, *, +, -, =)"
    ),
  confirmPassword: Yup.string()
    .required("Please enter your Password again")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
