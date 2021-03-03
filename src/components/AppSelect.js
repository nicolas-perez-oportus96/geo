import React from 'react';
import { Link } from 'react-router-dom';

export default function AppSelect2() {
    return (
        <main className="app-grid">

                <div className="app-box app-box1">
                    <div className="titulo">
                        <img src="/assets/App.svg" alt="app-icon"/>
                        <h2>Inventario Nacional de Glaciares</h2>
                    </div>
                    <div className="boton">
                        <Link className="button" to="/app1">Mas Información<img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                    </div>
                </div>
                
                <div className="app-box app-box2">
                    <div className="titulo">
                        <img src="/assets/App.svg" alt="app-icon"/>
                        <h2>Aplicacion 2</h2>
                    </div>
                    <div className="boton">
                        <Link className="button" to="/app2">Mas Información<img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                    </div>
                </div> 

                <div className="app-box app-box3">
                    <div className="titulo">
                        <img src="/assets/App.svg" alt="app-icon"/>
                        <h2>Aplicacion 3</h2>
                    </div>
                    <div className="boton">
                        <Link className="button" to="/app3">Mas Información<img src="/assets/Arrow.svg" alt="arrow"></img> </Link>
                    </div>
                </div>
            </main>
    )
}
