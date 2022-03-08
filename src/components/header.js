import React from "react";
import logo from '../images/face1.png';
import '../index.css';
export default function Header(){
    return(
        <header className="header">
            <img src={logo} className="head-img"/>
            <h2 className="head-h2"> Meme generator</h2>
            <h4 className="head-h4">React Course - Project 3</h4>
        </header>
    )
}