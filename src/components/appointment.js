import React from 'react'
import Calendar from './calendar.js'
import './appointment.css'

class Appointment extends React.Component {
    formErrors = [];
    constructor(props){
        super(props);
        this.pickDoctor = this.pickDoctor.bind(this);
        this.setAppDate = this.setAppDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.checkName = this.checkName.bind(this);
        this.checkSurname = this.checkSurname.bind(this);
        this.checkMail = this.checkMail.bind(this);
        this.checkNumber = this.checkNumber.bind(this);
        this.checkDate = this.checkDate.bind(this);

        this.state = {
            pickedDate : new Date(null),
            pickedDoctor : this.props.pickedDoctor,
            calendarActive : false,
            patientName : '',
            patientSurname : '',
            patientNumber : '',
            patientMail : '',
            submitError : false,
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

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.pickedDate.getFullYear() === 1970) {
            this.formErrors.push("Please fill in the date field correctly.")
        }

        if (this.state.patientName.length <= 3) {
            this.formErrors.push("Please fill in the name field correctly.")
        }

        if (this.state.patientSurname.length <= 3) {
            this.formErrors.push("Please fill in the surname field correctly.")
        }

        const regTel =/^([0-9]{9})$/;
        if(!regTel.test(this.state.patientNumber)) {
            this.formErrors.push("Please fill in the phone number field correctly.")
        }

        const regMail = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
        if (!regMail.test(this.state.patientMail)) {
            this.formErrors.push("Please fill in the mail field correctly.")
        }






        if (!this.formErrors.length) {
            alert(
                "pickedDoctor: "+this.state.pickedDoctor+"\n"+
                "pickedDate: "+this.state.pickedDate+"\n"+
                "patientName: "+this.state.patientName+"\n"+
                "patientSurname: "+this.state.patientSurname+"\n"+
                "patientNumber: "+this.state.patientNumber+"\n"+
                "patientMail: "+this.state.patientMail
            );
        }
        else {
            this.setState({submitError: true})
        }
    }

    toggleClass(event) {
        const currentState = this.state.calendarActive;
        this.setState({calendarActive: !currentState});
    };

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }

    checkDate(event) {
        if (this.state.pickedDate.getFullYear() === 1970) {
            event.target.className = "error"
        } else event.target.className = ""
    }

    checkName(event) {
        if(this.state.patientName.length < 3){
            event.target.className = "error"
        } else event.target.className = ""
    }

    checkSurname(event) {
        if(this.state.patientSurname.length < 3){
            event.target.className = "error"
        } else event.target.className = ""
    }

    checkNumber(event) {
        const reg =/^([0-9]{9})$/;
        if(!reg.test(this.state.patientNumber)) {
            event.target.className = "error"
        } else event.target.className = ""
    }

    checkMail(event) {
        const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
        if (!reg.test(this.state.patientMail)) {
            event.target.className  = "error"
            //formErrors.push("Please fill in the mail field correctly.");
        } else event.target.className = ""
    }

    render(){
        const workers = this.props.workers.map(el=><option>{el.name+" "+el.surname}</option>)
        return(
            <form onSubmit={this.handleSubmit}>
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
                    <input name="patientName" onBlur={this.checkName} onChange={this.handleChange} id="name" type="text" required/>
                </div>
                <div className="formField">
                    <label htmlFor="surname">Surname:</label>
                    <input name="patientSurname" onBlur={this.checkSurname} onChange={this.handleChange} id="surname" type="text" required/>
                </div>
                <div className="formField">
                    <label htmlFor="number">Phone number</label>
                    <input name="patientNumber" onBlur={this.checkNumber} onChange={this.handleChange} id="number" type="tel" required/>
                </div>
                <div className="formField">
                    <label htmlFor="email">E-mail</label>
                    <input name="patientMail" onBlur={this.checkMail} onChange={this.handleChange} id="email" type="email" required/>
                </div>
                {this.state.submitError && <>
                    <h3 className="form-error-title">
                        <ul className="form-error-list">
                        {this.formErrors.map((item) => (<li value={item}>{item}</li>))}
                        </ul>
                    </h3>
                    {this.formErrors.length = null}
                </>}
                <input type="submit" className="appointment-button" value="Make an appointment"/>
            </form>
        )
    }
}

export default Appointment