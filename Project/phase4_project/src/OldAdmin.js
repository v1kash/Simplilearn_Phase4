import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import LoginDetail from "./LoginDetail";
import PasswordChange from "./PasswordChange";


class Admin extends React.Component {

    constructor() {
        super();
        this.state = {
            username : "admin",
            password : "loginpass",
            isLogin: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        //this.handleChangePass = this.handleChangePass.bind(this);
      }
    
      handleLogin() {
        this.setState({
          isLogin: true
        });
        alert("hello");
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
              page = (
                <HashRouter>
                  <div>
                    <div className="content">
                    <div>
                    <NavLink to={{pathname: "/login", state: {username : "admin", password : "loginpass", isLogin: false}}}><button>Login</button></NavLink>
                    <NavLink to={{pathname: "/passwordChange", state: { username : "admin", password : "loginpass", isLogin: false}}}><button>Change Password</button></NavLink>
                    </div>
                      <Route path="/login" component={LoginDetail} />
                      <Route path="/passwordChange" component={PasswordChange} />
                      {/* <Route path="/passwordChangeConfirmation" component={PasswordChangeConfirmation} /> */}
                    </div>
                  </div>
                </HashRouter>
              );
          }

        return (
                <div>
                 {page}
                </div>
              );

          
      }
  }
  
  export default Admin;
