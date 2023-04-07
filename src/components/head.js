import React from 'react'
import headerphoto from '../img/headerphoto.jpg'
import './picture.css'


class Head extends React.Component {

    render() {
        return(
                <img className="head-picture"src={headerphoto} alt="Header photo"/>
        )
    }
}

export default Head;