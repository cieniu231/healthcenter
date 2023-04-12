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
                            <td className="info-desc">Working hours : </td>
                            <td className="info">{this.props.workingTime}</td>
                        </tr>
                    </table>
                </div>
                <button id={this.name+" "+this.surname} onClick={this.props.handleClick} className="person-button">Make an appointment</button>
                <div className="show-more-container">
                    <span className="show-more-button" onClick={this.showMoreClick}>Show more</span>
                </div>

                {this.state.showMore === true &&
                    <div className="more-information">
                    <p className="more-chapter">
                        {this.props.description}
                    </p>
                    </div>
                }
            </div>
        )
    }

}