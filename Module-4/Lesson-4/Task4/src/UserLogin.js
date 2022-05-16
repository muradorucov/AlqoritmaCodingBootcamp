import React from "react";

export default class UserLogin extends React.Component {
  onBlurHandlerEmail() {
    console.log("Yalnız .ru domenlərinə icazə verilir.");
  }
  onBlurHandlerPassword() {
    console.log("Ən azı 8 simvol");
  }
  render() {
    return (
      <div>
        <label htmlFor="email">
          Email:{" "}
          <input
            onClick={this.onBlurHandlerEmail}
            type="email"
            name="email"
            id="email"
          />
        </label>
        <br></br>
        <label htmlFor="password">
          Password:
          <input
            onClick={this.onBlurHandlerPassword}
            type="password"
            name="password"
            id="password"
          />
        </label>
        <br></br>
        <button type="submit">Login</button>
      </div>
    );
  }
}
