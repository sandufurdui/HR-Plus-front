
import React from "react";
import Meeting from './components/meeting_pop_up'
import Training from './components/training_pop_up'
import Turnover from './components/turnover_pop_up'
import "./style/main.css"
import "./style/pop.css"

function App({ Component }) {
  return (
  <div>
    <button class="dropbtn"> some fun actions </button>
    <div class="dropdown-content">
        <a class="dark-bg" >
            +add replacement
        </a>
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
    </div>
  </div>
  );
}

export default App;
