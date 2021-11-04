import React, { Component } from 'react'
import SignIn from "./signinComp"
import SignUp from "./signupComp"

export class employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChoose: true,
            showSignIn: false,
            showSignUp: false,
        };
        this._onButtonClick1 = this._onButtonClick1.bind(this);
        this._onButtonClick2 = this._onButtonClick2.bind(this);
    }
    
      _onButtonClick1() {
        this.setState({
          showSignIn: true,
          showChoose: false,
        });
      }
      _onButtonClick2() {
        this.setState({
          showSignUp: true,
          showChoose: false,
        });
      }
    render() {
        return (
            <div>{this.state.showChoose ? (
                <section class="u-align-center u-clearfix u-grey-10 u-section-1" id="sec-c036">
                <div class="u-clearfix u-sheet u-sheet-1">
                    <div class="u-align-center u-container-style u-custom-color-1 u-group u-radius-50 u-shape-round u-group-1">
                        <div class="u-container-layout u-container-layout-1">
                            <div>
                                <h3 class="u-text u-text-default u-text-1"></h3>
                            </div>
                            <div class="choose">
                                <button class="employee choose_button" onClick={this._onButtonClick1}>SignIn</button>
                                <button class="choose_button" onClick={this._onButtonClick2} >SignUp</button> 
                            </div>
                        </div>
                    </div>
                </div>
                </section>
              ) : (
                null
              )}
                
            {this.state.showSignIn ?
               <SignIn /> :
               null
            }
            {this.state.showSignUp ?
               <SignUp /> :
               null
            }
            </div>
        )
    }
}

export default employee
