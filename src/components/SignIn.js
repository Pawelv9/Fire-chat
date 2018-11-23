import React from "react";
import PropTypes from "prop-types";
import './SignIn.css';

const SignIn = ({ signIn }) => {
  return (
    <div className="SignIn">
      <button
        className="block"
        onClick={signIn}
      >
        Sign In
      </button>
    </div>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func
};

export default SignIn;
