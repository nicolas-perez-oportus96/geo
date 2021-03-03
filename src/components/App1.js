import React, { Component, } from 'react'
import MapComponent from './MapComponent';
import Sidebar from './Sidebar'
// const axios = require('axios');


export default class App1 extends Component {
    
    render() {
        return (
            <main className="app-container">
                <div className="instrucciones">
                    <div className="container flex">
                        <img src="/assets/app.svg" alt="app-icon" />
                        <div className="texto">
                            <h1>Aplicacion 1: <span>Glaciar Hielo</span></h1>
                            <p>Haz clic sobre un polígono para seleccionarlo y ver sus metadatos.</p>
                        </div>
                    </div>
                </div>

                <Sidebar/>

                <div className="map">
                    <MapComponent />
                </div>
            </main>
        )
    }
}
