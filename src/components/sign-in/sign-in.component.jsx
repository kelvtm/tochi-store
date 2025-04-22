import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, googleAuthProvider, db } from "../../firebase/firebase.utils";
import { signInWithPopup } from "firebase/auth";

import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSUbmit = async (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSUbmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            // required
          />
          <label>Email</label>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            // required
          />
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={this.signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
