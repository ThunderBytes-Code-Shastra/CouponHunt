import * as Yup from "yup";

export default loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Please enter username")
    .matches(/^[a-zA-Z0-9_@\.\-]+$/, "Please provide valid username"),
  password: Yup.string()
    .required("Please enter your Password")
    .min(6, "Password must contain alteast 6 characters")
    .max(15, "Password should not be greater than 15 characters")
    .matches(
      /^[a-zA-Z0-9!@#%^&*+-=]{6,15}$/,
      "Password can only contains alphabets, numbers and symbols(!, @, #, %, ^, &, *, +, -, =)"
    ),
});
