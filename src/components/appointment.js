import React from 'react'
import Calendar from './calendar.js'
import './appointment.css'

class Appointment extends React.Component {
    constructor(props){
        super(props);
        this.pickDoctor = this.pickDoctor.bind(this);
        this.setAppDate = this.setAppDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleClass = this.toggleClass.bind(this);

        this.state = {
            pickedDate : new Date(null),
            pickedDoctor : this.props.pickedDoctor,
            calendarActive : false,
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
        if (event.target.id === " "){
            this.setState({pickedDate: new Date(null)});
        } else if (event.target.className === 'unavaliable-day'){
            alert("This doctor is not available on the selected day.");
            this.setState({pickedDate: new Date(null)});
        } else if (event.target.className === 'current-day'){
            alert("We do not keep records for today");
            this.setState({pickedDate: new Date(null)});
        } else {
            this.setState({pickedDate: new Date(event.target.id)})
            const calendarActive = this.state.calendarActive;
            this.setState({calendarActive: !calendarActive})
        }

    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit(event) {
        alert(
            "pickedDoctor: "+this.state.pickedDoctor+"\n"+
            "pickedDate: "+this.state.pickedDate+"\n"+
            "patientName: "+this.state.patientName+"\n"+
            "patientSurname: "+this.state.patientSurname+"\n"+
            "patientNumber: "+this.state.patientNumber+"\n"+
            "patientMail: "+this.state.patientMail
        )
    }
    toggleClass(event) {
        const currentState = this.state.calendarActive;
        this.setState({calendarActive: !currentState});
    };


    render(){
        const workers = this.props.workers.map(el=><option>{el.name+" "+el.surname}</option>)

        return(
            <>
                <div className="formField">
                    <label>Doctor</label>
                    <select defaultValue={this.state.pickedDoctor} onChange={this.pickDoctor}>
                        {workers}
                    </select>
                </div>
                <div className="formField">
                <label>Pick a date</label>
                    <div className="pickDate"><Calendar toggleClass={this.toggleClass} calendarActive={this.state.calendarActive} workers={this.props.workers} pickedDoctor={this.state.pickedDoctor} pickedDate={this.state.pickedDate} pickDate={this.setAppDate}/></div>
                </div>
                <div className="formField">
                    <label htmlFor="name">Name:</label>
                    <input name="patientName" onChange={this.handleChange} id="name" type="text"/>
                </div>
                <div className="formField">
                    <label htmlFor="surname">Surname:</label>
                    <input name="patientSurname" onChange={this.handleChange} id="surname" type="text"/>
                </div>
                <div className="formField">
                    <label htmlFor="number">Phone number</label>
                    <input name="patientNumber" onChange={this.handleChange} id="number" type="tel"/>
                </div>
                <div className="formField">
                    <label htmlFor="email">E-mail</label>
                    <input name="patientMail" onChange={this.handleChange} id="email" type="email"/>
                </div>
                <button className="appointment-button" onClick={this.handleSubmit}>Make an appointment</button>
            </>
        )
    }
}

export default Appointment