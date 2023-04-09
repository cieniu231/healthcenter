import React from 'react'
import './App.css';
import { Menu } from './components/navigation';
import Head  from './components/head.js';
import Layout from './components/layout';
import Footer from './components/footer';

import { workers } from "./data/workers";
import { openHours } from './data/openHours';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            actualPage:"About us",
            pickedDoctor:"Kamil Nowocień"
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickAppointment = this.handleClickAppointment.bind(this)
    }

    handleClick(event) {
        this.setState(
            {actualPage: event.target.id}
        )
    }

    handleClickAppointment(event) {
        this.setState(
            {
                actualPage: "Make an appointment",
                pickedDoctor: event.target.id
            }
        )
    }

    render() {
        const menu = ["About us", "Make an appointment", "Our crew"];

        return (
            <div className="App">
                <Head/>
                <Menu menu={menu} handleClick={this.handleClick}/>
                <Layout openHours={openHours} workers={workers} handleClick={this.handleClickAppointment} pickedDoctor={this.state.pickedDoctor} actualPage={this.state.actualPage}/>
                <Footer/>
            </div>
        );
    }
}
export default App;
