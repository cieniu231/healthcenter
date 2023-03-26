import React from 'react'
import './about.css'
import aboutPhotoFirst from '../img/about/about_first.jpg'
import aboutPhotoSecond from '../img/about/about_second.jpg'
import aboutPhotoThird from '../img/about/about_third.jpg'

function About() {
    return(
        <>
            <div className="about-container">
                <img className="about-photo" src={aboutPhotoFirst} />
                <div className="about-info-container">
                    <p className="about-paragraph">Lorem ipsum dolor sit amet. Aut vitae culpa sit nihil consequatur qui voluptas modi et odit Quis et voluptate sequi rem facilis corrupti. Et iusto accusantium ut voluptas maxime in laboriosam aperiam. Id quos beatae est dolor iste nam quia quas qui perferendis facilis et quae aliquam.</p>
                </div>
            </div>
            <div className="about-container">
                <img className="about-photo" src={aboutPhotoSecond} />
                <div className="about-info-container">
                    <p className="about-paragraph">Lorem ipsum dolor sit amet. Aut vitae culpa sit nihil consequatur qui voluptas modi et odit Quis et voluptate sequi rem facilis corrupti. Et iusto accusantium ut voluptas maxime in laboriosam aperiam. Id quos beatae est dolor iste nam quia quas qui perferendis facilis et quae aliquam.</p>
                </div>
            </div>
            <div className="about-container">
                <img className="about-photo" src={aboutPhotoThird} />
                <div className="about-info-container">
                    <p className="about-paragraph">Vel incidunt eaque est animi suscipit ab odio rerum et atque omnis sed commodi placeat 33 architecto mollitia aut voluptatibus ipsum. Qui nulla vero sit necessitatibus omnis est porro iste et minus dolor ut consectetur molestiae. Ut reiciendis minima vel modi eaque ab debitis rerum.</p>
                </div>
            </div>

        </>
    )
}

export default About