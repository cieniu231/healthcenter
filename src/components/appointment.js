import React from 'react'
import Calendar from './calendar.js'
import Appointmentform from './appointmentform.js'

class Appointment extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
         <>
             <Appointmentform/>
             <Calendar/>
         </>
            )
    }
}

export default Appointment