import React from 'react'
import { Person } from './personel.js'
import './personel.css'


class Personellist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const workersList = this.props.workers.map((item)=><Person handleClick={this.props.handleClick} description={item.description} name={item.name} surname={item.surname} specialization={item.specialization} workingTime={item.workingTime} srcPhoto={item.srcPhoto}/>)

        return (
                <>
                    {workersList}
                </>
        )
    }
}

export default Personellist