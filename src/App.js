import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Menu } from './components/navigation';
import Head  from './components/head.js';
import Layout from './components/layout';
import Footer from './components/footer';
import Personellist from "./components/personellist";
import JusMalPhoto from './img/personel/id1.jpg'
import KamNowPhoto from './img/personel/id2.jpg'
import RokoPhoto from './img/personel/id3.jpg'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {actualPage:"About us"}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState(
            {actualPage: event.target.id}
        )

        const name = event.target.id;
        console.log('this ma wartość:', this.state.actualPage);
        console.log('name ma wartość:', name);
    }

    render() {
        const menu = ["About us", "Make an appointment", "Our crew"];
        const workers = [
            {
                name: "Kamil",
                surname: "Nowocień",
                specialization: "Psychiatrist",
                workingTime: "mon/tue: 10-12",
                workingDays: ["mon","tue"],
                srcPhoto : KamNowPhoto
            },
            {
                name: "Justyna",
                surname: "Malczak",
                specialization: "Psychologist",
                workingTime: "10-15",
                workingDays: ["fri", "thu"],
                srcPhoto: JusMalPhoto
            },
            {
                name: "Roko",
                surname: "Sierściuch",
                specialization: "Physiotherapist",
                workingTime: "10-15",
                workingDays: ["mon", "tue", "wed"],
                srcPhoto: RokoPhoto
            }
        ];
        return (
            <div className="App">
                <Head/>
                <Menu menu={menu} handleClick={this.handleClick}/>
                <Layout workers={workers} handleClick={this.handleClick} actualPage={this.state.actualPage}/>
                <Footer/>
            </div>
        );
    }
}
export default App;
