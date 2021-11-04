import React, { Component } from 'react'
import SignIn from "./signinComp"
import SignUp from "./signupComp"
import EmployeeAuth from "./employeeAuth"
import Logo from '../images/HR-app_logo.svg';

export class auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChoose: true,
            showEmployee: false,
            showAdmin: false,
        };
        this._onButtonClick1 = this._onButtonClick1.bind(this);
        this._onButtonClick2 = this._onButtonClick2.bind(this);
    }
    
      _onButtonClick1() {
        this.setState({
          showEmployee: true,
          showChoose: false,
        });
      }
      _onButtonClick2() {
        this.setState({
          showAdmin: true,
          showChoose: false,
        });
      }
    render() {
        
        return( 
            <div>{this.state.showChoose ? (
                <section class="u-align-center u-clearfix u-grey-10 u-section-1" id="sec-c036">
                <div class="u-clearfix u-sheet u-sheet-1">
                    <div class="clear u-align-center u-container-style u-custom-color-1 u-group u-radius-50 u-shape-round u-group-1">
                        <div class="u-container-layout u-container-layout-1 clear">
                            <div>
                                <h3 class="u-text u-text-default u-text-1 welcome">Welcome to</h3>
                                <img class="logo" src={Logo} />
                            </div>
                            <div class="choose">
                                <button class="employee choose_button" onClick={this._onButtonClick1}>Employee</button>
                                <button class="choose_button" onClick={this._onButtonClick2} >Admin</button> 
                            </div>
                        </div>
                    </div>
                </div>
                </section>
              ) : (
                null
              )}
                
            {this.state.showEmployee ?
               <EmployeeAuth /> :
               null
            }
            {this.state.showAdmin ?
               <SignIn /> :
               null
            }
            </div>
        )    
    }
}

export default auth

