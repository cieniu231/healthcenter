import React from 'react'
import Calendar from './calendar.js'
import Appointmentform from './appointmentform.js'
import './appointmentform.css'

class Appointment extends React.Component {
    constructor(props){
        super(props);
        this.pickDoctor = this.pickDoctor.bind(this);
        this.setAppDate = this.setAppDate.bind(this);
        this.setName = this.setName.bind(this);
        this.setSurname = this.setSurname.bind(this);
        this.setNumber = this.setNumber.bind(this);
        this.setMail = this.setMail.bind(this);
        this.klikajTO = this.klikajTO.bind(this);

        this.state = {
            pickedDate : new Date(null),
            pickedDoctor : this.props.pickedDoctor,
            patientName : '',
            patientSurname : '',
            patientNumber : '',
            patientMail : '',
        }
    }

    pickDoctor(event) {
        this.setState({pickedDoctor:event.target.value})
        console.log(this.state.pickedDoctor)
    }
    setAppDate(event) {
        this.setState({pickedDate: new Date(event.target.id)})

        console.log("początek");
        console.log(event.target.id);
        console.log(this.state.pickedDate);

        const pickedDateProps = this.state.pickedDate;
       // pickedDateProps.setDate(this.state.pickedDate.getDate()+1);
        console.log(pickedDateProps);
    }

    setName(event) {
        this.setState({patientName: event.target.value})
    }

    setSurname(event) {
        this.setState({patientSurname: event.target.value})
    }

    setNumber(event) {
        this.setState({patientNumber: event.target.value})
    }

    setMail(event) {
        this.setState({patientMail: event.target.value})
    }

    klikajTO(event) {
        console.log(this.state.patientName, this.state.patientSurname, this.state.patientNumber, this.state.patientMail)
    }


    render(){
        const workers = this.props.workers.map(el=><option>{el.name+" "+el.surname}</option>)

        return(
            <>
                <div className="formField">
                    <label>Doctor</label>
                    <select defaultValue={this.state.pickedDoctor} onChange={this.pickDoctor}>
                        <option> </option>
                        {workers}
                    </select>
                </div>
                <div className="formField">
                <label>Pick a date</label>
                    <div className="pickDate"><Calendar pickedDoctor={this.state.pickedDoctor} pickedDate={this.state.pickedDate} pickDate={this.setAppDate}/></div>
                </div>
                <div className="formField">
                    <label htmlFor="name">Name:</label>
                    <input onChange={this.setName} id="name" type="text"/>
                </div>
                <div className="formField">
                    <label htmlFor="surname">Surname:</label>
                    <input onChange={this.setSurname} id="surname" type="text"/>
                </div>
                <div className="formField">
                    <label htmlFor="number">Phone number</label>
                    <input onChange={this.setNumber} id="number" type="tel"/>
                </div>
                <div className="formField">
                    <label htmlFor="email">E-mail</label>
                    <input onChange={this.setMail} id="email" type="email"/>
                </div>
                <button onClick={this.klikajTO}>kliknij se batona</button>
            </>
        )
    }
}

export default Appointment