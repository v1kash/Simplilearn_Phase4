import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

// 3/07/2021

// Assignment 1
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   increment(){
//     this.setState({count:this.state.count+1});
//   }

//   render() {
//     return (
//       <div>
//         {/* <button onClick={() => this.setState({ count: 1 })}>Click me!</button>
//         {this.state.count}  */}
//         <button onClick={() => this.increment()}>
//           Click me!
//         </button>
//         {this.state.count}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// Assignment2

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: true
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin() {
    this.setState({
      isLogin: true
    });
  }

  handleSignup() {
    this.setState({
      isLogin: false
    });
  }

  render() {
    let page;
    if (this.state.isLogin) {
      page = (
        <form>
          <h4>Login Form</h4>

          <label>Username</label>
          <input type="text"></input>
          <br />

          <label>Password</label>
          <input type="password"></input>
          <br />

          <button>Submit</button>
        </form>
      );
    } else {
      page = (
        <form>
          <h4>Signup Form</h4>

          <label>Username</label>
          <input type="text"></input>
          <br />

          <label>Roll number </label>
          <input type="number"></input>
          <br />

          <label>Age</label>
          <input type="number"></input>
          <br />

          <label>Password</label>
          <input type="password"></input>
          <br />

          <label>Confirm password</label>
          <input type="password"></input>
          <br />

          <button>Submit</button>
        </form>
      );
    }

    return (
      <div>
        <div>
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleSignup}>Signup</button>
        </div>
        {page}
        <div></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
