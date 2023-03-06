import React from 'react'
import './layout.css'

class Layout extends React.Component {

    render() {
        return (
            <div>
                <aside className="left-panel">
                    <p>tutaj będą godziny otwarcia pobieranie z wizytówki google</p>
                </aside>
                <section className="main-content">
                    <article>
                        <p>Tutaj będzie główna część strony</p>
                    </article>
                </section>

            </div>
        )
    }
}

export default Layout