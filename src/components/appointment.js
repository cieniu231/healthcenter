import React from 'react'
import Calendar from './calendar.js'

class Appointment extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Calendar/>
            )
    }
}

export default Appointment