import React, { Component } from "react";
class Register extends Component {
  state = {};
  render() {
    return (
      <form>
        <label> First Name: </label>
        <input type="text" placeholder="First Name.." />
        <label> Last Name:</label>
        <input type="text" placeholder="Last Name.." />
        <label> Age</label>
        <input type="date" />
        <label> Username: </label>
        <input type="text" placeholder="Username.." />
        <label> Password: </label>
        <input type="password" placeholder="Password.." />
        <label> Confirm Password: </label>
        <input type="password" placeholder="Enter Password again.." />
      </form>
    );
  }
}

export default Register;
