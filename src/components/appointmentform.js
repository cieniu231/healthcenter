import React from 'react'
import Calendar from "./calendar.js";
import './appointmentform.css'

class Appointmentform extends React.Component {

    constructor(props){
        super(props);
        this.state = {
                        value: '',
                        choosenDoctor: '',

                    };
    }

    render(){
        return(
            <form>
                <div className="formField">
                <label for="name">Name:</label>
                    <input id="name" type="text" />
                </div>
                <div className="formField">
                <label for="surname">Surname:</label>
                    <input id="surname" type="text"/>
                </div>
                <div className="formField">
                <label>Doctor</label>
                    <select value={this.state.choosenDoctor} onChange={this.hadleChange}>
                        <option>Kamil Nowocień</option>
                        <option>Justyna Malczak</option>
                        <option>Roko Sierściuch</option>
                    </select>
                </div>
                <div className="formField">
                <label for="number">Phone number</label>
                    <input id="number" type="tel"/>
                </div>
                <div className="formField">
                <label for="email">E-mail</label>
                    <input id="email" type="email"/>
                </div>
                <div className="formField">
                <label for="date">Date</label>
                    <div className="pickDate"><Calendar/></div>
                </div>
                <input id="submit" type="submit" value="Submit" />
            </form>
        )
    }

}

export default Appointmentform
