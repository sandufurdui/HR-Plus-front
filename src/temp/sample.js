import React from 'react'
import Turnover from "../components/turnover_pop_up"
import Training from"../components/training_pop_up"
import Meeting from "../components/meeting_pop_up"
import "../style/turnover.css"
import "../style/training.css"
import "../style/meeting.css"

function sample() {
    return (
        <div>
            <a class="dark-bg " href="#addpop" >pop trigger </a>
            <div id="turnover" class="overlay">{/*change id to the respective meed name*/}
                <div class="popup">
                    <div class="pop-div">
                        <h2 />
                        <a class="dark-bg button"  href="#addturnover" >+ add turnover </a>
                          <Turnover /> 
                    </div>
                </div>
            </div>
            <div id="meeting" class="overlay">{/*change id to the respective meed name*/}
                <div class="popup">
                    <div class="pop-div">
                        <h2 />
                        <a class="dark-bg button"  href="#addmeeting" >+ add turnover </a>
                          <Meeting /> 
                    </div>
                </div>
            </div>
            <div id="training" class="overlay">{/*change id to the respective meed name*/}
                <div class="popup">
                    <div class="pop-div">
                        <h2 />
                        <a class="dark-bg button"  href="#addtraining" >+ add turnover </a>
                          <Training /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sample