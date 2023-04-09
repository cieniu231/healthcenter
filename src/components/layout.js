import React from 'react'
import './layout.css'
import About from './about.js'
import Personellist from './personellist.js'
import Appointment from './appointment.js'
import MapContainer from './map.js'

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pageRender;
        if(this.props.actualPage == "About us") {
            pageRender = <About/>;
        } else if(this.props.actualPage == "Our crew") {
            pageRender = <Personellist handleClick={this.props.handleClick} workers={this.props.workers} />;
        } else if(this.props.actualPage == "Make an appointment") {
            pageRender = <Appointment pickedDoctor={this.props.pickedDoctor} workers={this.props.workers}/>;
        }

        const openHours = this.props.openHours.map(el =>
                <tr>
                    <th>{el.day}</th> <td>{el.hours}</td>
                 </tr>
        )

        return (
            <>
                <section className="main-content">
                    <article>
                        {pageRender}
                    </article>
                </section>
                <aside className="left-panel">
                    <div className="open-hours-container">
                        <table className="open-hours-table">
                            <thead>
                            <tr>
                                <th>Day</th> <th>Hours</th>
                            </tr>
                            </thead>
                            <tbody>
                            {openHours}
                            </tbody>
                        </table>
                    </div>
                    <MapContainer openHours={this.props.openHours}/>
                </aside>
            </>
        )
    }
}

export default Layout