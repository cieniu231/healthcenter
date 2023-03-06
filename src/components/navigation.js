import React from 'react'
import './navigation.css'
class MenuItem extends React.Component {
    render() {
        const name = this.props.name;
        return <button className="menuitem">{name}</button>
    }
}
export class Menu extends React.Component {
    render() {
        const menu = this.props.menu;
        return menu.map((item) => (
            <nav>
                <ul>
                    <li className="listitem"><MenuItem name={item}/></li>
                </ul>
            </nav>
            )
        )
    }
}

