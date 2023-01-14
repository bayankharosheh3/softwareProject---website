import React, { Component } from "react";
import { Link } from "react-router-dom";
import Style from "./styles.module.css";

export default class SignInForm extends Component {
  state = {
    username: "",
    password: "",
  };

  handelChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handelClick = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className={Style.form}>
        <div className={Style.container}>
          <div className={Style.row}>
            <img
              className={Style.logoImg}
              src="./assets/images/logo.png"
              alt="logo"
            />
            <span className={Style.logo}>Clinics</span>
          </div>
          <p className={Style.desc}>
            Sign in to your<span className={Style.titleSpan}> patient </span>
            account
          </p>
          <div className={Style.column}>
            <label className={Style.inputLabel} htmlFor="inputEmail">
              Username
            </label>
            <input
              className={Style.inputContent}
              value={this.state.username}
              id="inputEmail"
              type="email"
              placeholder="Enter Username"
              onChange={(e) => this.handelChange("username", e.target.value)}
            />
          </div>
          <div className={Style.column}>
            <label className={Style.inputLabel} htmlFor="inputPass">
              Password
            </label>
            <input
              className={Style.inputContent}
              value={this.state.password}
              id="inputPass"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => this.handelChange("password", e.target.value)}
            />
          </div>
          <div className={Style.linkContainer}>
            <Link className={Style.link}>Forget password?</Link>
          </div>
          <Link className={Style.btn} onClick={this.handelClick} to="/today">
            Sign in
          </Link>
          <div className={Style.moveTo}>
            <span>Don't have an account?</span>
            {"  "}
            <Link className={Style.link} to="/">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
