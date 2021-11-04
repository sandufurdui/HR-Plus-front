import react from "react";
import "../style/sign_up.css";

function sign_up_Comp() {
    return (
        <div class="container-sign-up">
        <div><h1 class="sign-up-title">Sign up</h1> </div>
        <div class="sign-up-div">
          <form class="sign-up-form" >
            <label>
              <input type="text" id="Name" name="Name" placeholder="Name"  required/>
            </label>
            <label>
              <input type="text" id="Surname"  name="Surname" placeholder="Surname" required />
            </label>
            <label>
              <input type="text" id="Wage"  name="Wage" placeholder="Wage" required />
            </label>
            <label>
              <input type="text" id="companyId"  name="companyId" placeholder="Company ID" required />
            </label>
            <label>
              <input type="email" id="email" name="email" placeholder="Email"  required/>
            </label>
            <label>
              <input type="password"  name="password" id="password" placeholder="Create password" required/>
            </label>
            <label>
              <input type="text" id="managedById"  name="managedById" placeholder="Managed by ID" required />
            </label>
            <label>
              <input type="text" id="role"  name="role" placeholder="Role" required />
            </label>
            <label>
              <input type="text" id="startDate"  name="startDate" placeholder="Start date" required />
            </label>
            <input type="submit"  id="submitbutton" value="Sign Up" />
          </form>
        </div>  
      </div>
    )
}

export default sign_up_Comp