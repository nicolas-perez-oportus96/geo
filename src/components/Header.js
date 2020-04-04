import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>GeoProcessing Apps</h1>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Encuesta</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
