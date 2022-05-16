import React, { Component } from 'react'

export default class Navbar extends Component {
    render(){
        return (
            <div className="home" style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + 'img/background.png'})` 
              }}>
                <header>
                    <nav id="nav-bar">
                        <ul id="nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#timeline">Timeline</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
            
        );
    }
}