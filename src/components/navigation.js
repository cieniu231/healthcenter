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
        const listItems = menu.map((item) => (<li key={item} className="listitem"><MenuItem name={item}/></li>))

        return (
        <nav className="navigation">
                <ul className="menulist">
                    {listItems}
                </ul>
            </nav>
        )
    }
}

