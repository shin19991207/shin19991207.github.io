import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {  FiExternalLink } from 'react-icons/fi';
import logo from '../images/profile.JPG'
import background from '../images/sidebar_bg.jpg'

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar" style={{ 
                backgroundImage: `url(${background})`
              }}>
                <img src={logo} />
                <p className="myName">I'm Morgan,</p>
                <p className="info"> a CS undergrad @UofT. </p>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"><a href="linkedin.com/in/morgan-chang-585b961a4/" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/shin19991207" rel="opener noreferrer" target="_blank" class="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/morganchang_/" rel="opener noreferrer" target="_blank" class="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:shin19991207@gmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar