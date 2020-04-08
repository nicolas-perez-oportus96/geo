import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export default class App1 extends Component {
  

    render() {
        return (
            <main className="app-container">
                <div className="instrucciones">
                    <div className="container flex">
                        <img src="/assets/app.svg" alt="app-image"/>
                        <div className="texto">
                            <h1>Aplicacion 1: <span>Glaciar Hielo</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sunt mollitia minima vel quas officiis enim saepe exercitationem aliquam iste earum aspernatur commodi natus, maxime laborum, possimus fuga dolorem voluptatibus?</p>
                        </div>
                   </div>
                </div>

                <div className="sidebar">
                    <h1>Informacion del poligono</h1>
                    
                </div>

                <div className="map">
                    <Map center={[-35.675148, -71.542969]} zoom={6}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright>OpenStreetMap</a> Contributors'/>
                    </Map>
                </div>
            </main>
        )
    }
}
