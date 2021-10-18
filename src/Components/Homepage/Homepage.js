import React from 'react'
import './HomePage.css'
import HomeVector from '../../assets/homevector.png';
function Homepage() {
    return (
        <>
            <div className="main__div flex__center">
                <div className="main__div__left">
                    <h1>DSA</h1>
                    <h1>Roadmap</h1>
                    <div className="height__box__50"></div>
                    <button className="primary__button">Get Started</button>
                </div>
                <div className="main__div__right flex__center">
                    <img src={HomeVector} alt="main" className="main__div__image"></img>
                </div>
            </div>
            <div style={{ height: "100vh" }}></div>
        </>
    )
}

export default Homepage
