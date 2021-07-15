import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import LoginDetail from "./LoginDetail";
import PasswordChange from "./PasswordChange";
//import Admin from "./Admin";


class NewAdmin extends React.Component {

    constructor() {
        super();

        this.state = {
            username : "admin",
            password : "loginpass",
            isLogin: false,
            isLoginClicked: false,
            isChangePassClicked: false
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.setAdminPassword = this.setAdminPassword.bind(this);
        this.handleLoginClicked = this.handleLoginClicked.bind(this);
        this.handlePassChangeClicked = this.handlePassChangeClicked.bind(this);
      }
    
      handleLogin() {
        this.setState({
          isLogin: true
        });
        alert("Logged in");
      }
      
      setAdminPassword(newPass){
         this.setState({
             password: newPass
         });
         alert("Password changed");
      }
      
      
      handleLoginClicked(){
         
          this.setState({
              isLoginClicked: true,
              isChangePassClicked: false
          });
      }

      handlePassChangeClicked(){
          this.setState({
              isChangePassClicked: true,
              isLoginClicked: false
          });
      }
    
    
      render() {
          let page;
          if(this.state.isLogin)
          {
               page = (
                   <div>

                   </div>
               );
          }
          else{

            if(this.state.isLoginClicked){
                page = <LoginDetail handleLogin={this.handleLogin} username={this.state.username} password={this.state.password}/>;
            }
            else if(this.state.isChangePassClicked){
                page = <PasswordChange setAdminPassword={this.setAdminPassword}/>;
            }
            else{
              page = (
                <div className="content">
                    <div>
                      <h3>Welcome to Kitchen story!</h3>
                      <h4>You can Login or change your password using the buttons below:</h4>
                      <div>
                       <button onClick={this.handleLoginClicked}>Login</button>
                       <button onClick={this.handlePassChangeClicked}>Change Password</button>
                      </div>
                    </div>
                </div>
              );
            }
          }

        return (
                <div>
                <h1>KITCHEN STORY</h1>
                 {page}
                </div>
              );

          
      }
  }
  
  export default NewAdmin;
