import React, { Component } from "react";

class Login extends Component {
  state = {
    userName: "",
    password: ""
  };
  render() {
    return (
      <form>
        <div className="reg">
          <div id="row">
            <label> Username: </label>{" "}
            <input name="userName" type="text" placeholder="Username.." />
          </div>
          <div id="row">
            <label> Password: </label>{" "}
            <input name="password" type="password" placeholder="Password.." />
          </div>
          <div id="row">
            <button value="submit">Login</button>
          </div>
        </div>{" "}
      </form>
    );
  }
}

export default Login;
