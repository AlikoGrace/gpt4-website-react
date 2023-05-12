import React from 'react'
import './header.css'
import  people from '../../assets/people.png'
import  ai from '../../assets/ai.png'
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home ">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's build something amazing
                 with GPT-3 OpenAI
                </h1>
                <p>
                  Yet bed any travelling assistance indulgence unpleasing Not thoughts all evercicie blessing indulgenge way everthing observance blessing in a doubt with you.
                </p>
                <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your email address"/>
                    <button type="button">Get started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                     <p>1,300 people requested access a visit in the last 24 hours</p>
                </div>

            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai "/>
            </div>
            </div>
    )
}
export default Header
