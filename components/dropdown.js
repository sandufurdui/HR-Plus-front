import React, { Component } from 'react'

export class dropdown extends Component {
    render() {
        const addEmployee = () => {
            alert("This button will do something in the near future ¯\_(ツ)_/¯");
          }
        return (
            <div>
                <div class="dropdown">
                        <button class="dropbtn">some fun actions</button>
                        <div class="dropdown-content">
                            <button class="dark-bg" onClick={addEmployee}>+ add replacement </button>
                            <button class="dark-bg" onClick={addEmployee}>+ add employee </button>
                            <button class="dark-bg" onClick={addEmployee}>+ add training </button>
                            <button class="dark-bg" onClick={addEmployee}>+ add turnover </button>
                            <button class="dark-bg" onClick={addEmployee}>+ add meeting </button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default dropdown
