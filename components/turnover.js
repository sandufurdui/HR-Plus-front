import React, { Component } from 'react'
import "../style/turnover.css"

export class turnover extends Component {
    render() {
        return (
            <div class="container-turnover" scroll="no">
                <div>
                    <h1 class="turnover-title">Turnover Pop-up</h1>
                </div>
                <div class="turnover-div">
                <p class="select">Select Employee</p>
                <form class="turnover-form">
                    <select name="employee" class="employee"  value="Employee">
                    <option value="" disabled selected hidden>Employee</option>
                    </select>
                    <button type="submit" id="turnover-button" value="Submit">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}

export default turnover
