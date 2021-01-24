import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.com";
import CustomButton from "../custom-button/custom-button.com";
import { emailSignInStart } from "../../redux/users/user.actions";
import "./sign-in.sty.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(userCredentials));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>SIGNIN</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          value={password}
          handleChange={handleChange}
        />

        <CustomButton type="submit" value="Signin">
          Sign in
        </CustomButton>
        <div className="create__new">
          Dont have an account? <Link to="/signup">Create new</Link>
        </div>
      </form>
      <span
        style={{
          color: "red",
          marginTop: "10px",
        }}
      >
        {errorMessage === "Request failed with status code 400"
          ? "Please check your email and password"
          : ""}
      </span>
    </div>
  );
};

export default SignIn;
