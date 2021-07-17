import React from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import { Route, NavLink, HashRouter } from "react-router-dom";



class Admin extends React.Component {

    constructor() {
        super();

        this.state = {
            username : "admin",
            password : "loginpass",
            isLogin: false,
            isLoginClicked: false,
            isChangePassClicked: false,
            isPassChanged: false,
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLoginClicked = this.handleLoginClicked.bind(this);
        this.handlePassChangeClicked = this.handlePassChangeClicked.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
      }

      handlePassChange(e) {
       // alert(e.target.password.value);
        const newpass = e.target.password.value;
         this.setState({
             isPassChanged: true,
             password: newpass
         });
        }
    
      handleLogin() {
        this.setState({
          isLogin: true
        });
        alert("Logged in");
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
      
      validateLogin(e){
        e.preventDefault();
       // alert("Started Login Validation");
         if(e.target.username.value === this.state.username &&  e.target.password.value===this.state.password)
            {
             this.handleLogin();
            }
            else{
                alert("Wrong username or password! Redirecting to homepage");
                this.setState({
                  isLoginClicked:false
                })
            }
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
               // page = <LoginDetail handleLogin={this.handleLogin} username={this.state.username} password={this.state.password}/>;
                  page = (
                  <div className="content">
                    <form type="post" onSubmit={(e)=>{this.validateLogin(e)}}>
                      <h4>Login</h4>
                      <label for="username">Enter Name</label>
                      <input type="text" id="username" name="username" required></input>
                      <br />
                      <label for="password">Password</label>
                      <input type="password" id="password" name="password" required></input>
                      <br />
                      <input　type="submit" value="Submit"/>
                    </form> 
                  </div>
                );
            }
            else if(this.state.isChangePassClicked){
               // page = <PasswordChange setAdminPassword={this.setAdminPassword}/>;
                  if (this.state.isPassChanged) {
                        page = (
                            <div>
                            <p>
                              Hello, your password has been changed to {this.state.password} succesfully.
                            </p>
                            <button onClick={this.handleLoginClicked}>Continue</button>
                          </div>
                          );
                } 
                else {
                  page = (
                    <div className="content">
                    <form type="post" onSubmit={this.handlePassChange}>
                      <h4>Password Change</h4>
                      <label for="password">Enter new password</label>
                      <input type="password" id="password" name="password" required></input>
                      <br />
                      <input　type="submit" value="Submit"/>
                    </form>
                  </div>
                  );
                }
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
                {/* status check */}
                <div>
                      {this.state.isLoginClicked.toString()}
                      <br></br>
                      {this.state.isChangePassClicked.toString()}
                      <br></br>
                      {this.state.password}
                </div>
                {/* status check */}
                 {page}
                </div>
              );

          
      }
  }
  
  export default Admin;
