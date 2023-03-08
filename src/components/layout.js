import React from 'react'
import './layout.css'
import About from './about.js'
import Personellist from "./personellist";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <aside className="left-panel">
                    <p>tutaj będą godziny otwarcia pobieranie z wizytówki google</p>
                </aside>
                <section className="main-content">
                    <article>
                        <Personellist workers={this.props.workers} />
                    </article>
                    <About/>
                </section>

            </div>
        )
    }
}

export default Layout