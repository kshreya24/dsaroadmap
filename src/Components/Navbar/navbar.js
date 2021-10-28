import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/BlueWithBrackets.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [link, setLink] = useState(0);
    const [navToggle, setNavToggle] = useState(false)
    const [position, setPosition] = useState(false)
    const scrollDistance = () => {
        const windowHeight = window.innerHeight;
        // console.log(windowHeight);
        let scroll = window.scrollY;
        // console.log(scroll);
        if (scroll > windowHeight / 2) {
            setPosition(true)
        } else {
            setPosition(false)
        }
    }
    window.addEventListener('scroll', () => {
        scrollDistance();
    })
    return (
        <div className={(position) ? "nav__main flex__center__space positionFixed" : "nav__main flex__center__space"}>
            <div>
                <img src={Logo} alt="ccsclogo" className="ccsclogo"></img>
            </div>
            <div className={(!navToggle) ? "nav__major__div toggle" : "nav__major__div"}>
                <ul className="flex__center nav__links__master">
                    <li>
                        <Link to='/' style={{ textDecoration: "none" }} onClick={() => { setLink(0); setNavToggle(false) }}>
                            <p style={{ color: (link === 0) ? '#1e88e5' : '#000', fontWeight: (link === 0) ? 'bold' : 'normal', transition: "all 0.3s ease" }}>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/probspage' style={{ textDecoration: "none" }} onClick={() => { setLink(1); setNavToggle(false) }}>
                            <p style={{ color: (link === 1) ? '#1e88e5' : '#000', fontWeight: (link === 1) ? 'bold' : 'normal', transition: "all 0.3s ease" }}>Problems</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contest' style={{ textDecoration: "none" }} onClick={() => { setLink(2); setNavToggle(false) }}>
                            <p style={{ color: (link === 2) ? '#1e88e5' : '#000', fontWeight: (link === 2) ? 'bold' : 'normal', transition: "all 0.3s ease" }}>Contests</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/abtpage' style={{ textDecoration: "none" }} onClick={() => { setLink(3); setNavToggle(false) }}>
                            <p style={{ color: (link === 3) ? '#1e88e5' : '#000', fontWeight: (link === 3) ? 'bold' : 'normal', transition: "all 0.3s ease" }}>About</p>
                        </Link>
                    </li>
                    <li>
                        <button className="primary__button mobile__button">Log In</button>
                    </li>
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px" height="25px" className="close__button" onClick={() => setNavToggle(false)}><g data-name="Layer 2"><g data-name="plus"><rect width="24" height="24" opacity="0" transform="rotate(180 12 12)" /><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" /></g></g></svg>
            </div>
            <div>
                <button className="primary__button desktop__button">Log In</button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px" height="25px" className="burger" onClick={() => setNavToggle(true)}><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" opacity="0" transform="rotate(180 12 12)" /><rect width="18" height="2" x="3" y="11" rx=".95" ry=".95" /><rect width="18" height="2" x="3" y="16" rx=".95" ry=".95" /><rect width="18" height="2" x="3" y="6" rx=".95" ry=".95" /></g></g></svg>
            </div>
        </div>
    )
}

export default Navbar
