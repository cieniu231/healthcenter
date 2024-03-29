import React from 'react'
import './calendar.css'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.now = new Date();
        this.day = this.now.getDate();
        //this.month = this.now.getMonth();
        this.year = this.now.getFullYear();
        this.state = {
            month : this.now.getMonth(),
        };
        //this.input = input;
        this.handleClickPrev = this.handleClickPrev.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.monthNames = ["January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    }




    handleClickPrev() {
        this.setState({month: this.state.month-1});
        if (this.state.month <= 0) {
            this.setState({month: 11});
            this.year--;
        }
        console.log(this.state.month);
    }

    handleClickNext() {
        this.setState({month: this.state.month+1});
        if (this.state.month >= 11) {
            this.setState({month: 0});
            this.year++;
        }
    }

    renderDaysHead() {
        return this.days.map((day) => <th>{day}</th>);
    }

    renderMonthTable() {

        // get the numbers of days in the month
        const daysInMonth = new Date(this.year, this.state.month+1, 0).getDate();

        // get the first day of the month
        const tempDate = new Date(this.year, this.state.month, 1);
        let firstMonthDay = tempDate.getDay();

        // normally first day is Sunday, Monday is the last
        // we correct it if it is necessary
        if(firstMonthDay === 0) {
            firstMonthDay = 7;
        }

        // number of all cells - both empty and with days
        const j = daysInMonth + firstMonthDay - 1;
        let emptycount = 0;
        // make a counter for empty cells at the start of the month
        for (let i=0; i<firstMonthDay-1; i++) {
            emptycount++;
        }

        // make a counter for <tr> and <td>
        let trcount = 0;
        let tdcount = 0;

        if (firstMonthDay - 1 !== 0) {
            trcount++;
        }

        for (let i = firstMonthDay-1; i<j; i++) {
            if(i % 7 === 0){
                trcount++;
            }
            tdcount ++;
        }
        const dayBoxTable = [];
            for(let i = 0; i < trcount; i++){
                dayBoxTable[i] = Array.from({length: 7}, (e, i) => ({ dayNumber: " " }));
            }

        for (let i = 0; i < trcount; i++) {
            if (emptycount > 0 && i === 0) {
                  for (let j = emptycount; j < 7; j++){
                      dayBoxTable[i][j].dayNumber = j - emptycount + 1
                      dayBoxTable[i][j].dayOfTheWeek = j;

                  }
            } else if (emptycount === 0) {
                for (let j = 0; j < 7; j++){
                    dayBoxTable[i][j].dayNumber =((7 * i) + j + 1 <= tdcount ? ((7 * i) + j + 1) : " ")
                    dayBoxTable[i][j].dayOfTheWeek = j;

                }
            } else {
                for (let j = 0; j < 7; j++) {
                    dayBoxTable[i][j].dayNumber =((7 * i) + j + 1 - emptycount <= tdcount ? ((7 * i) + j + 1 - emptycount) : " ");
                    dayBoxTable[i][j].dayOfTheWeek = j;

                }
            }
        }

        const actualMonth = this.state.month+1;

        const pickedDoctorName =  this.props.pickedDoctor === " " ? " " : this.props.pickedDoctor.split(" ");

        const pickedDoctor = this.props.workers.filter(el => el.name === pickedDoctorName[0] && el.surname === pickedDoctorName[1]);


        console.log(pickedDoctorName[1]);

        //console.log(pickedDoctor[0].workingDays);




        return dayBoxTable.map((row) => {
            return (
                <tr>
                    {
                        row.map((item) => (
                            <td className = {
                                this.year===this.now.getFullYear()&&this.state.month===this.now.getMonth()&&item.dayNumber===this.now.getDate() ? 'current-day' :
                                    (pickedDoctor[0].workingDays.some(el => el === item.dayOfTheWeek) || item.dayNumber  === " ") && ((item.dayNumber > this.now.getDate() && this.state.month === this.now.getMonth() && this.year === this.now.getFullYear())||(this.state.month>this.now.getMonth())&&this.year===this.now.getFullYear()||this.year>this.now.getFullYear()) ? 'day' : 'unavaliable-day'
                            }
                                id={item.dayNumber !== " "?this.year+","+actualMonth+","+item.dayNumber:" "}
                                onClick={this.props.pickDate}>
                                    {item.dayNumber}
                            </td>
                                )
                            )
                    }
                </tr>
        )});

    }



    render(){
        return(
            <div className="input-calendar-cnt">
                <input value={this.props.pickedDate.getFullYear()===1970?" ":this.props.pickedDate.toString().slice(4,15)} onClick={this.props.toggleClass} type="text" className="input-calendar"></input>
                <div id="divCnt" className={this.props.calendarActive ? 'calendar calendar-show' : 'calendar'}>
                    <div id="divHeader" className="calendar-header">
                        <div id="divButtons" className="calendar-prev-next">
                            <button onClick={this.handleClickPrev} className="input-prev"> &lt; </button>
                            <button onClick={this.handleClickNext} className="input-next"> &gt; </button>
                        </div>
                        <div id="divDateText" className="date-name">{this.monthNames[this.state.month] + " " + this.year}</div>
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