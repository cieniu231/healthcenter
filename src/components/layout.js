import React from 'react'
import './layout.css'
import About from './about.js'
import Personellist from './personellist.js'
import Appointment from './appointment.js'

class Layout extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        let pageRender;
        if(this.props.actualPage == "About us") {
            pageRender = <About/>;
        } else if(this.props.actualPage == "Our crew") {
            pageRender = <Personellist workers={this.props.workers} />;
        } else if(this.props.actualPage == "Make an appointment") {
            pageRender = <Appointment/>;
        }

        return (
            <div>
                <aside className="left-panel">
                    <p>tutaj będą godziny otwarcia pobieranie z wizytówki google</p>
                </aside>
                <section className="main-content">
                    <article>
                        {pageRender}
                    </article>
                </section>
            </div>
        )
    }
}

export default Layout