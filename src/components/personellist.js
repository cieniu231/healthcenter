import React from 'react'
import { Person } from './personel.js'
import './personel.css'


class Personellist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const workersList = this.props.workers.map((item)=><Person name={item.name} specialization={item.specialization} workingTime={item.workingTime}/>)

        return (
                <>
                    {workersList}
                </>
        )
    }
}

export default Personellist