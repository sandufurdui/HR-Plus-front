import react from "react";
import "../style/sign_in.css";

function sign_in_Comp() {
    return (
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
           
              <input type="submit"  id="sign-in-button" value="Sign In" />
            </form>
          </div>  
        </div> 
    )
}

export default sign_in_Comp