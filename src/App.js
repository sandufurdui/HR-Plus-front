
import React from "react";
import Meeting from './components/meeting_pop_up'
import Training from './components/training_pop_up'
import Turnover from './components/turnover_pop_up'
import Replacement from "./components/replacement";
import Employee from "./components/add_employee_pop_up"
import "./style/main.css"
import "./style/pop.css"

function App({ Component }) {
  return (
  <div>
    <button class="dropbtn"> some fun actions </button>
    <div class="dropdown-content">
        {/* <a class="dark-bg" href="#addreplacement">
            +add replacement
        </a>
        <Replacement /> */}
        <a class="dark-bg" >
            +add turnover
        </a>
        <a class="dark-bg" href="#addtrain" >
            +add training
        </a>
        <Training />
        <a class="dark-bg" href="#addturn" >
            +add turnover
        </a>
        <Turnover />
        <a class="dark-bg " href="#addmeet" >
            +add meeting
        </a>
        <Meeting />
        <a class="dark-bg" href="#addreplacement">
            +add replacement
        </a>
        <Replacement />
        <a class="dark-bg" href="#addemployee">
            +add employee
        </a>
        <Employee />
    </div>
  </div>
  );
}

export default App;
