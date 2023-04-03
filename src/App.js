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

        this.state = {
            actualPage:"About us",
            pickedDoctor:""
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
        const openHours = [
            {
                day: "Monday",
                hours: "10-17",
                dayNumber: 1,
            },
            {
                day: "Tuesday",
                hours: "10-17",
                dayNumber: 2,
            },
            {
                day: "Wednesday",
                hours: "10-17",
                dayNumber: 3,
            },
            {
                day: "Thursday",
                hours: "10-17",
                dayNumber: 4,
            },
            {
                day: "Friday",
                hours: "10-17",
                dayNumber: 5,
            },
            {
                day: "Saturday",
                hours: "-",
                dayNumber: 6,
            },
            {
                day: "Sunday",
                hours: "-",
                dayNumber: 0,
            }
        ]


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
