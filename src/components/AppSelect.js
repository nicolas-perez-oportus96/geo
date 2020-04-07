import React, { Component } from 'react'

import arrow from '../assets/Arrow.svg'

export default class AppSelect extends Component {
    render() {
        return (
            <main className="app-grid">
                <div className="app-box app-box1">
                    <div className="titulo">
                        <h1>Aplicacion 1</h1>
                    <hr/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus enim ab. Optio fugiat ea, unde voluptatibus rem officia numquam neque maxime, tempora, porro ducimus molestiae quas eveniet culpa quos.</p>
                    <button>Visitar Aplicacion  <img src={arrow} alt="arrow"></img> </button>
                </div>
                
                <svg></svg>

                <div className="app-box app-box2">
                    <div className="titulo">
                        <h1>Aplicacion 1</h1>
                        <hr/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus enim ab. Optio fugiat ea, unde voluptatibus rem officia numquam neque maxime, tempora, porro ducimus molestiae quas eveniet culpa quos.</p>
                    <button>Visitar Aplicacion <img src={arrow} alt="arrow"></img> </button>
                </div> 

                <div className="app-box app-box3">
                    <div className="titulo">
                        <h1>Aplicacion 1</h1>
                        <hr/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus enim ab. Optio fugiat ea, unde voluptatibus rem officia numquam neque maxime, tempora, porro ducimus molestiae quas eveniet culpa quos.</p>
                    <button>Visitar Aplicacion <img src={arrow} alt="arrow"></img> </button>
                </div>
            </main>
        )
    }
}
