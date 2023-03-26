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
        this.showMoreClick = this.showMoreClick.bind(this)
        this.state = {
            showMore: false
        }
    }

    showMoreClick() {
        this.setState({
            showMore: !this.state.showMore
        });
    }

    render() {
        return (
            <div className={this.state.showMore ? "person-container-showMore" : "person-container" }>
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
                <div className="show-more-container">
                    <span className="show-more-button" onClick={this.showMoreClick}>Show more</span>
                </div>

                {this.state.showMore == true &&
                    <div className="more-information">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                }
            </div>
        )
    }

}