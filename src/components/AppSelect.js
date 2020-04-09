import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class AppSelect extends Component {
    render() {
        return (
            <main className="app-grid">
                
                <div className="instrucciones">
                    <div className="titulo">
                        <img src="/assets/Mountain.svg" alt="mountain-icon"/>
                        <h1>Bienvenido a GeoProcessing Apps!</h1>
                    </div>
                    <hr/>
                    <p>Selecciona tu aplicacion de interes en la parte inferior.</p>
                </div>

                <div className="app-box app-box1">
                    <div className="titulo">
                        <img src="/assets/App.svg" alt="app-icon"/>
                        <h2>Aplicacion 1</h2>
                    </div>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus enim ab. Optio fugiat ea, unde voluptatibus rem officia numquam neque maxime, tempora, porro ducimus molestiae quas eveniet culpa quos.</p>
                    <Link className="button" to="/app1">Visitar Aplicacion  <img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                </div>
                
                <div className="app-box app-box2">
                    <div className="titulo">
                        <img src="/assets/App.svg" alt="app-icon"/>
                        <h2>Aplicacion 2</h2>
                    </div>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus enim ab. Optio fugiat ea, unde voluptatibus rem officia numquam neque maxime, tempora, porro ducimus molestiae quas eveniet culpa quos.</p>
                    <Link className="button" to="/app2">Visitar Aplicacion <img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                </div> 

                <div className="app-box app-box3">
                    <div className="titulo">
                        <img src="/assets/App.svg" alt="app-icon"/>
                        <h2>Aplicacion 3</h2>
                    </div>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus enim ab. Optio fugiat ea, unde voluptatibus rem officia numquam neque maxime, tempora, porro ducimus molestiae quas eveniet culpa quos.</p>
                    <Link className="button" to="/app3">Visitar Aplicacion <img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                </div>
            </main>
        )
    }
}
