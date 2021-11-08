import react from "react";
import "../style/turnover.css";

function turnover_pop_up() {
  return (
    <div class="container-turnover" scroll="no" style={{ overflow: "hidden" }}>
      <div class="turnover-div">
        <p class="select">Select Employee</p>
        <form class="turnover-form">
          <select name="employee" class="employee" value="Employee">
            <option value="" disabled selected hidden>
              Employee
            </option>
          </select>
          <button type="submit" id="turnover-button" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default turnover_pop_up;
