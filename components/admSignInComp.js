import React, { Component } from 'react'
import "../style/sign_in.css"
import AdminPanel from "./adminPanel"

export class admSignInComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignIn: true,
            showAdminPanel: false,
        };
        this.OpenAdminPanel = this.OpenAdminPanel.bind(this);
    }
    
    OpenAdminPanel() {
        this.setState({
          showAdminPanel: true,
          showSignIn: false,
        });
      }
    render() {
        return (
                <div>{this.state.showSignIn ? (
                    <div class="container-sign-in">
                    <div><h1 class="sign-in-title">Sign in</h1> </div>
                    <div class="sign-in-div">
                      <form class="sign-in-form" >
                        <label>
                          <input type="email" id="email" name="email" placeholder="Email"  required/>
                        </label>
                        <label>
                          <input type="password" name="password" id="password" placeholder="Password" />
                        </label>
                        <button type="submit"  id="sign-in-button" value="Sign In" onClick={this.OpenAdminPanel}>Sign in</button>
                      </form>
                    </div>  
                  </div> 
                    ) : (
                        null
                      )}
                        
                    {this.state.showAdminPanel ?
                       <AdminPanel /> :
                       null
                    }
                    </div>
        )
    }
}

export default admSignInComp