import react from "react";
import "../style/training.css";

function training_pop_up() {
    return (
        <div class="container-training" scroll="no" style={{overflow: 'hidden'}}>
            <div class="training-div">
                <form class="training-form">
                    <p class="company-name ">Company_name Training Detalis</p>
                    <p class="meeting-time-box text-color text-size size">
                        Training Time and Duration
                    </p>
                    <div class="date size">
                        <p class="date-select text-color text-size">Date</p>
                        <input type="date" name="date" id="date" class="date-input "  />
                    </div>
                    <div class="time size">
                        <p class="time-duration text-color text-size">Instruction Hours</p>
                        <input type="number" name="ins-hours" id="ins-hours" class="ins-hours input-style " placeholder="hours" />
                    </div>
                    <div class="length display-style size">
                        <p class="tr-length text-color text-size">Training Length</p>
                        <input type="number" name="training-length" id="training-length" class="training-length input-style " placeholder="hours" />
                    </div>
                    <p class="meeting-notes text-color text-size ">Trainer(s) Information</p>
                    <div class="trainers-assigned display-style2 display-style size">
                        <p class="assigned text-color text-size">Trainers Assigned</p>
                        <input type="number" name="tr-assigned" id="tr-assigned" class="tr-assigned input-style " placeholder="hours" />
                    </div>
                    <div class="trainers-pay-rate display-style size">
                        <p class="pay-rate text-color text-size">Trainers Pay Rate</p>
                        <input type="text" name="hours" id="hours" class="pay input-style" placeholder="0.00" />
                    </div>
                    <p class="final-costs text-color text-size">Final Costs</p>
                    <div class="costs display-style size">
                        <p class="training-costs text-color text-size">Training Costs</p>
                        <input type="text" name="costs" id="costs" class="tr-costs input-style" placeholder="0.00" />
                    </div>
                    <button type="submit" id="training-button" value="Submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        
    );
}

export default training_pop_up;
