import React from 'react'
import './picture.css'
import './personel.css'
// import idphoto from '../img/personel/id1.jpg'



export class Person extends React.Component {
    constructor(props) {
        super(props)
        this.name = this.props.name;
        this.surname = this.props.surname;
        this.workingTime = this.props.workingTime;
        this.specialization = this.props.specialization;
    }

    render() {
        return (
            <div className="person-container">
                <div className="id-photo-container">
                    <img className="id-photo" src={this.props.srcPhoto} alt="this is doctor photo" />
                </div>
                <div className="information-container">
                    <table className="information-table-container">
                        <tr>
                            <td className="info-desc">Name : </td>
                            <td className="info">{this.props.name}</td>
                        </tr>
                        <tr>
                            <td className="info-desc">Surname : </td>
                            <td className="info">{this.props.surname}</td>
                        </tr>
                        <tr>
                            <td className="info-desc">Specialization : </td>
                            <td className="info">{this.props.specialization}</td>
                        </tr>
                        <tr>
                            <td className="info-desc">Working hours: </td>
                            <td className="info">{this.props.workingTime}</td>
                        </tr>
                    </table>
                </div>
                <button className="person-button">Make an appointment</button>
            </div>
        )
    }

}