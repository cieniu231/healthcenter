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
            pageRender = <Personellist handleClick={this.props.handleClick} workers={this.props.workers} />;
        } else if(this.props.actualPage == "Make an appointment") {
            pageRender = <Appointment/>;
        }

        return (
            <>
                <aside className="left-panel">
                    <p>tutaj będą godziny otwarcia pobieranie z wizytówki google</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10339.444350259262!2d19.492158928546548!3d51.737408186215724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1680117526389!5m2!1spl!2spl"
                        className="map"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
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