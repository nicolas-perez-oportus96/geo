import React, { Component } from 'react'
import MapComponent from './MapComponent';

export default class App1 extends Component {
  

    render() {
        return (
            <main className="app-container">
                <div className="instrucciones">
                    <div className="container flex">
                        <img src="/assets/app.svg" alt="app-icon"/>
                        <div className="texto">
                            <h1>Aplicacion 2: <span>Glaciar Universidad</span></h1>
                            <p>Haz clic sobre un polígono para seleccionarlo y ver sus metadatos.</p>
                        </div>
                   </div>
                </div>

                <div className="sidebar">
                    <h2>Informacion del poligono</h2>
                    
                </div>

                <div className="map">
                    <MapComponent/>
                </div>
            </main>
        )
    }
}
