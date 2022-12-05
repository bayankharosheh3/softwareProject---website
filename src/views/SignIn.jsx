import React, { Component } from "react";
import LeftContent from "../components/LeftContent";
import SignInForm from "../components/SignInForm";

export default class SignIn extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>
        <LeftContent />
        <SignInForm/>
      </div>
    );
  }
}
