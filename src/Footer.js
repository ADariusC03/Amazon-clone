import React from 'react'
import './Footer.css';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { green } from '@material-ui/core/colors';

function Footer() {
    return (
        <div className="main-footer" >
             <hr />
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col">
                        <h3>Get to Know Us</h3>
                        <ul className="list-un">
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon-Clone</li>
                            <li>Amazon-Clone Devices</li>
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col">
                     <h3>Make Money with Us</h3>
                        <ul className="list-un">
                            <li>Sell products on Amazon-Clone</li>
                            <li>Sell apps on Amazon-Clone</li>
                            <li>Host an Amazon_CLone Hub</li>
                            <li>Advertise Your Products</li>
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className="col">
                        <h3>Let Us Help You</h3>
                        <ul className="list-un">
                            <li>Amazon and COVID-19</li>
                            <li>Your Account</li>
                            <li>Your Orders</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    {/* column 4 */}
                    <div className="col">
                        <h3>Contact Me</h3>
                        <ul className="list-un">
                            <li><MailIcon color="primary" /> adariusc03@gmail.com</li>
                            <li><a href="https://github.com/ADariusC03"><GitHubIcon style={{ color: green[500] }} /> ADariusC03 </a></li>
                            <li><a href="https://www.linkedin.com/in/a-darius-craig-825b14178/"><LinkedInIcon color="action"  /> LinkedIn Profile</a></li>
                            <li><PhoneIphoneIcon/> Call/Text: +1 (334) 407-8353</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sn">
                        &copy;{new Date().getFullYear()} A'DariusC03 | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer
