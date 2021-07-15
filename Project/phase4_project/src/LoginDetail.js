import React from "react";
import Admin from "./Admin";

class LoginDetail extends React.Component {

    validateLogin(e){
    alert("Started Login Validation");
    //alert(this.props.location.state.username);
    //alert(this.props.username);
    //alert(e.target.username.value);
     if(e.target.username.value === this.props.username &&  e.target.password.value===this.props.password)
        {
         this.props.handleLogin();
        }
        else{
            alert("Wrong username or password!");
        }
    }

  render() {
    return (
      <div className="content">
       <form type="post" onSubmit={(e)=>{this.validateLogin(e)}}>
          <h4>Login</h4>
          <label for="username">Enter Name</label>
          <input type="text" id="username" name="username" required></input>
          <br />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required></input>
          <br />
          {/* <button onSubmit={this.validateLogin}>Log In</button> */}
          <input　type="submit" value="Submit"/>
        </form> 
      </div>
    );
  }
}

export default LoginDetail;