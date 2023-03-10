import React from 'react'
import './calendar.css'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.now = new Date();
        this.day = this.now.getDate();
        this.month = this.now.getMonth();
        this.year = this.now.getFullYear();
        this.state = {
            active : false,
        };
        //this.input = input;
        this.toggleClass = this.toggleClass.bind(this);

        this.monthNames = ["January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        this.daysInMonth = new Date(this.year, this.month+1, 0).getDate();


    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({active: !currentState});
    };

    renderDaysHead() {
        return this.days.map((day) => <th>{day}</th>);
    }


    render(){
        return(
            <div className="input-calendar-cnt">
                <input onClick={this.toggleClass} type="text" className="input-calendar"></input>
                <div id="divCnt" className={this.state.active ? 'calendar calendar-show' : 'calendar'}>
                    <div id="divHeader" className="calendar-header">
                        <div id="divButtons" className="calendar-prev-next"></div>
                        <div id="divDateText" className="date-name">{this.monthNames[this.month] + " " + this.year}</div>
                </div>
                <div id="divTable" className="calendar-table-cnt">
                    <table className="calendar-table">
                        <thead>
                        <tr className="calendar-table-days-names">
                            {this.renderDaysHead()}
                        </tr>
                        </thead>

                    </table>

                </div>

                </div>
            </div>
        )
    }
}

export default Calendar