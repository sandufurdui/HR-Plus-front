import react from "react";
import "../style/meeting.css";

function meeting_pop_up() {
    return (
        <div id="addmeet" class="overlay">
            <a class="close" href="#"> &times; </a>
            <div class="popup">
                <div class="pop-div">
                    <form class="meeting-form ">
                        <input type="text" id="text" name="text" class="pretty-input" placeholder="Meeting name" required />
                        <div>
                            <p class=" text-color text-size">Date</p>
                            <input type="date" name="date" class="date-box" required />
                        </div>
                        <div>
                            <p class=" text-color text-size">Time Duration</p>
                            <input type="number" name="date" class="time-input" max="10" min="1" placeholder="hours" required />
                        </div>
                        <p class=" text-color text-size ">Meeting Notes</p>
                        <textarea class="notes" placeholder="Notes.. "></textarea>
                        <div class="checkbox-div ">
                            <div class="myCheckbox text-color ">
                                Interview
                                <input type="checkbox" class="checkbox-input" name="interview" />
                            </div>
                        </div>
                        <button class="button-design" type="submit" value="Submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default meeting_pop_up;
