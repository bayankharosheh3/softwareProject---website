import React, { Component } from "react";
import { Link } from "react-router-dom";
import Style from "./styles.module.css";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
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
            Get started with a <span className={Style.titleSpan}>patient</span>{" "}
            account
          </p>
          <div className={Style.column}>
            <label className={Style.inputLabel} htmlFor="inputName">
              Name
            </label>
            <input
              className={Style.inputContent}
              value={this.state.name}
              id="inputName"
              placeholder="Your Full Name"
              onChange={(e) => this.handelChange("name", e.target.value)}
            />
          </div>
          <div className={Style.column}>
            <label className={Style.inputLabel} htmlFor="inputEmail">
              Email
            </label>
            <input
              className={Style.inputContent}
              value={this.state.email}
              id="inputEmail"
              type="email"
              placeholder="Your Email Address"
              onChange={(e) => this.handelChange("email", e.target.value)}
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
              placeholder="Your Password"
              onChange={(e) => this.handelChange("password", e.target.value)}
            />
          </div>
          <div className={Style.rowInput}>
            <div className={Style.checkbox}>
              <input type="checkbox" name="" id="terms" />
            </div>
            <label className={Style.inputLabel} htmlFor="terms">
              I have read and understood the
              <Link className={Style.link}>Terms and Conditions</Link>and
              <Link className={Style.link}>Privacy Policy</Link>of this site.
            </label>
          </div>
          <button className={Style.btn} onClick={this.handelClick}>
            Register
          </button>
          <div className={Style.moveTo}>
            <span>Already have an account?</span>
            <Link className={Style.link} to="/signIn">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
