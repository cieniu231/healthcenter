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
            pageRender = <Appointment/>;
        }

        return (
            <>
                <aside className="left-panel">
                    <table>
                        <thead>
                            <tr>
                                <th>Day</th> <th>Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Monday</th> <td>10-17</td>
                            </tr>
                            <tr>
                                <th>Tuesday</th> <td>10-17</td>
                            </tr>
                            <tr>
                                <th>Wednesday</th> <td>10-17</td>
                            </tr>
                            <tr>
                                <th>Thursday</th> <td>10-17</td>
                            </tr>
                            <tr>
                                <th>Friday</th> <td>10-17</td>
                            </tr>
                            <tr>
                                <th>Saturday</th> <td>10-17</td>
                            </tr>
                            <tr>
                                <th>Sunday</th> <td>10-17</td>
                            </tr>
                        </tbody>
                    </table>
                    <MapContainer/>
                </aside>
                <section className="main-content">
                    <article>
                        {pageRender}
                    </article>
                </section>
            </>
        )
    }
}

export default Layout