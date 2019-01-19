import React from "react";
import "./Footer.css"
import cat from './img/cat.png'

const Footer = ()=>
    <div className="footer text-center pt-5">
        <div>
            <img src={cat}/>
        </div>
        <div className="footer-content">
            <div className="connection mb-2">
                <a href="https://github.com/farha-neu" target="_blank" className="mr-3">
                    github
                </a>
                <a href="https://www.linkedin.com/in/farhajawed/" target="_blank" className="mr-3">
                    linkedin
                </a>
                <a href="mailto:farhajw@gmail.com" target="_blank">
                    email
                </a>
            </div>
            <div className="copyright"> © 2019 Farha Jawed. All rights reserved.</div>
        </div>
    </div>

export default Footer