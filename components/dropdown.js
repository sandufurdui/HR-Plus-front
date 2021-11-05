import React, { Component } from 'react'
import Turnover from "./turnover"

export class dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAdmin: true,
            showTurnover: false,
        };
        this.TurnoverPop = this.TurnoverPop.bind(this);
    }
    
    TurnoverPop() {
        this.setState({
          showTurnover: true,
        });
    }
    render() {
        return (
            <div>{this.state.showAdmin ? (
                <div class="dropdown">
                        <button class="dropbtn">some fun actions</button>
                        <div class="dropdown-content">
                            <button class="dark-bg" onClick={this.TurnoverPop}>+ add replacement </button>
                            <button class="dark-bg" onClick={this.TurnoverPop}>+ add turnover </button>
                            <button class="dark-bg" onClick={this.TurnoverPop}>+ add training </button>
                            <button class="dark-bg" onClick={this.TurnoverPop}>+ add turnover </button>
                            <button class="dark-bg" onClick={this.TurnoverPop}>+ add meeting </button>
                        </div>
                    </div>
                    ) : (
                null
                )}

                {this.state.showTurnover ?
                    <Turnover /> :
                null
                }

            </div>
        )
    }
}

export default dropdown
