import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>GeoProcessing <span>Apps</span></h1>
                <nav>
                    <ul>
                        <li><Link to="#">Inicio</Link></li>
                        <li><Link to="#">Acerca de</Link></li>
                        <li><Link to="#">Encuesta</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
