import react from "react";
import "../style/meeting.css";

function meeting_pop_up() {
    return (
        <div class="container-meeting" scroll="no" style={{ overflow: 'hidden' }}>
            <div class="meeting-div">
                <form class="meeting-form">
                    <label>
                        <input type="text" id="text" name="text" class="meeting-name" placeholder="Meeting name" required />
                    </label>
                    <p class="meeting-time-box text-color text-size">
                        Meeting Time and Duration
                    </p>
                    <div class="date style">
                        <p class="date-select text-color text-size">Date</p>
                        <input type="date" name="date" class="date-box" required />
                    </div>
                    <div class="time style">
                        <p class="time-duration text-color text-size">Time Duration</p>
                        <input type="number" name="date" class="hours" placeholder="hours" required />
                    </div>
                    <p class="meeting-notes text-color text-size ">Meeting Notes</p>
                    <textarea class="notes" placeholder="Notes.. "></textarea>
                    <div class="interview-box ">
                        <label class="myCheckbox text-color ">
                            Interview
                            <input type="checkbox" class="interview-checkbox" name="interview" />
                        </label>
                    </div>
                    <button type="submit" id="meeting-button" value="Submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default meeting_pop_up;
