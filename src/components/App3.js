import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet';

export default class App1 extends Component {
  

    render() {
        return (
            <main className="app-container">
                <div className="instrucciones">
                    <div className="container flex">
                        <img src="/assets/app.svg" alt="app-icon"/>
                        <div className="texto">
                            <h1>Aplicacion 3: <span>Glaciar Nuevo</span></h1>
                            <p>Haz clic sobre un polígono para seleccionarlo y ver sus metadatos.</p>
                        </div>
                   </div>
                </div>

                <div className="sidebar">
                    <h2>Informacion del poligono</h2>
                    
                </div>

                <div className="map">
                    <Map center={[-35.675148, -71.542969]} zoom={6}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> Contributors'
                        />
                    </Map>
                </div>
            </main>
        )
    }
}
