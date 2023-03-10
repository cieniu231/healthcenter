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
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({active: !currentState});
    };

    renderDaysHead() {
        return this.days.map((day) => <th>{day}</th>);
    }

    renderMonthTable() {

        // get the numbers of days in the month
        const daysInMonth = new Date(this.year, this.month+1, 0).getDate();

        // get the first day of the month
        const tempDate = new Date(this.year, this.month, 1);
        let firstMonthDay = tempDate.getDay();

        // normally first day is Sunday, Monday is the last
        // we correct it if it is necessary
        if(firstMonthDay === 0) {
            firstMonthDay = 7;
        }

        // number of all cells - both empty and with days
        const j = daysInMonth + firstMonthDay - 1;

        // make a counter for <tr> and <td>
        let trcount = 0;
        let tdcount = 0;


        for (let i = firstMonthDay-1; i<j; i++) {
            if(i % 7 == 0){
                trcount++;
            }
            tdcount ++;
        }
    }
    // stwórz tablicę z numerem dnia miesiąca i mumerem komórki
    // niektóre komórki będą puste (początkowe i końcowe),
    //następnie skorzystaj z map żeby wyświetlić te komórki
    // jako tablicę


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
                        <tbody>
                            {this.renderMonthTable()}
                        </tbody>

                    </table>

                </div>

                </div>
            </div>
        )
    }
}

export default Calendar