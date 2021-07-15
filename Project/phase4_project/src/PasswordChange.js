import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Admin from "./Admin";
import LoginDetail from "./LoginDetail";
import NewAdmin from "./NewAdmin"

class PasswordChange extends React.Component {

    constructor() {
    super();
    this.state = {
        isPassChanged: false,
        continue: false
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    }



    handlePassChange(e) {
    this.setState({
        isPassChanged: true
    });
    //alert(this.props.location.state.password);
    // alert(e.target.password.value);
      // this.props.location.state.password = e.target.password.value;
     // alert(this.props.location.state.password);
     this.props.setAdminPassword(e.target.password.value);
    }

    handleContinue(){
        this.setState({
            continue: true
        })   
    }
  
  
  render() {
    let page;
    if (this.state.isPassChanged) {
        if(this.state.continue){
          page = <LoginDetail/>;
        }
        else{
            page = (
                <div>
                <p>
                  Hello, your password has been changed succesfully.
                </p>
                <button onClick={this.handleContinue}>Continue</button>
              </div>
              );
        }
    } 
    else {
      page = (
        <div className="content">
        <form type="post" onSubmit={this.handlePassChange}>
          <h4>Password Change</h4>
          <label for="password">Enter new password</label>
          <input type="password" id="password" name="password"></input>
          <br />
           {/* <button onClick={this.handlePassChange}>Submit</button>  */}
           <input　type="submit" value="Submit"/>
        </form>
       </div>
      );
    }

    return (
      <div>
        {page}
        <div></div>
      </div>
    );
  }
}

export default PasswordChange;