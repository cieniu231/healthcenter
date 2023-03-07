import React from 'react'
import './navigation.css'
class MenuItem extends React.Component {
    render() {
        const name = this.props.name;
        return <button id={name} onClick={this.props.handleClick} className="menuitem">{name}</button>
    }
}
export class Menu extends React.Component {

    render() {
        const handleChange = this.props.handleClick;
        const listItems = this.props.menu.map((item) => (<li key={item} className="listitem"><MenuItem  handleClick={this.props.handleClick} name={item}/></li>))

        return (
        <nav className="navigation">
                <ul className="menulist">
                    {listItems}
                </ul>
            </nav>
        )
    }
}

