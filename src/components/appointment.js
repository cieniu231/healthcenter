import React from 'react'
import Calendar from './calendar.js'
import Appointmentform from './appointmentform.js'
import './appointmentform.css'

class Appointment extends React.Component {
    constructor(props){
        super(props);
        this.pickDoctor = this.pickDoctor.bind(this);
        this.setAppDate = this.setAppDate.bind(this);

        this.state = {
            pickedDate : new Date(),
            pickedDoctor : '',
        }
    }

    pickDoctor(event) {
        this.setState({pickedDoctor:event.target.value})
        console.log(this.state.pickedDoctor)
    }
    setAppDate(event) {
        this.setState({pickedDate: new Date(event.target.id)})

        console.log(event.target.id);
        console.log(this.state.pickedDate);

    }

    render(){
        return(
            <>
                <div className="formField">
                    <label >Doctor</label>
                    <select onChange={this.pickDoctor}>
                        <option>Psychologist</option>
                        <option>Psychiatrist</option>
                        <option>Physiotherapist</option>
                    </select>
                </div>
                <div className="formField">
                <label>Pick a date</label>
                    <div className="pickDate"><Calendar pickedDate={this.state.pickedDate} pickDate={this.setAppDate}/></div>
                </div>
                <div className="formField">
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text"/>
                </div>
                <div className="formField">
                    <label htmlFor="surname">Surname:</label>
                    <input id="surname" type="text"/>
                </div>
                <div className="formField">
                    <label htmlFor="number">Phone number</label>
                    <input id="number" type="tel"/>
                </div>
                <div className="formField">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email"/>
                </div>

            </>
        )
    }
}

export default Appointment