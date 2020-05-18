import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="titulo">
                    <img src="/assets/Mountain.svg" alt="mountain-icon"/>
                    <h1>GeoProcessing <span>Apps</span></h1>
                </div>
                
                <nav>
                    <ul>
                        <li><Link to="/home">Inicio</Link></li>
                        <li><Link to="#">Acerca de</Link></li>
                        <li><Link to="#">Encuesta</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
