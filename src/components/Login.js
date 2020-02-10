import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <form>
        <label> Username: </label>{" "}
        <input type="text" placeholder="Username.." />
        <label> Password: </label>{" "}
        <input type="password" placeholder="Password.." />
      </form>
    );
  }
}

export default Login;
