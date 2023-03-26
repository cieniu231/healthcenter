import React from 'react'
import Calendar from './calendar.js'
import Appointmentform from './appointmentform.js'
import './appointmentform.css'

class Appointment extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pickedDate : new Date(),
            pickedDoctor : '',
        }
    }

    render(){
        return(
            <>
                <div className="formField">
                    <label>Doctor</label>
                    <select>
                        <option>Psychologist</option>
                        <option>Psychiatrist</option>
                        <option>Physiotherapist</option>
                    </select>
                </div>
                <div className="formField">
                <label>Pick a date</label>
                    <div className="pickDate"><Calendar/></div>
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