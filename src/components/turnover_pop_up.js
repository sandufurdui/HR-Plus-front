import react from "react";
import "../style/turnover.css";

function turnover_pop_up() {
  return (
    <div id="addturn" class="overlay">
      <a class="close" href="#"> &times; </a>
      <div class="popup">
        <div class="container-turnover">
          <div class="pop-div">
          <form class="turnover-form">
              <p class="select">Select Employee</p>
              <select name="employee" class="employee" value="Employee">
                <option value="" disabled selected hidden>
                  Employee
                </option>
              </select>
              <button class="button-design" type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default turnover_pop_up;
