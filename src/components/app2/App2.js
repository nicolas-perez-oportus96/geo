import React, { Component, } from 'react'
import MapComponent from '../MapComponent';
import Sidebar from './Sidebar'


export default class App2 extends Component {
    
    render() {
        return (
            <main className="app-container">
                <div className="instrucciones">
                    <div className="container flex">
                        <img src="/assets/app.svg" alt="app-icon" />
                        <div className="texto">
                            <h1>Aplicación 2: <span>Linea de Tendencia Central</span></h1>
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
