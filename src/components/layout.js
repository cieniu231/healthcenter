import React from 'react'
import './layout.css'
import { Person } from './personel.js'

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const workersList = this.props.workers.map((item)=><Person name={item.name} specialization={item.specialization} workingTime={item.workingTime}/>)

        return (
            <div>
                <aside className="left-panel">
                    <p>tutaj będą godziny otwarcia pobieranie z wizytówki google</p>
                </aside>
                <section className="main-content">
                    <article>
                        {workersList}
                    </article>
                </section>

            </div>
        )
    }
}

export default Layout