import React, {useEffect, useState} from 'react'
import MapComponent from './MapComponent';
const axios = require('axios');

export default function App1f(props) {

    const [data, setData] = useState({});

    // useEffect(() => {
    //     GetWFSData();
    // })
    
    // const GetWFSData = async () => {
    //     const res = await axios.get('http://34.67.131.141:8080/geoserver/app1/wfs?request=GetFeature&version=1.0.0&typeName=app1:ING_FINAL&outputFormat=json')
    //     await console.log(res.data)
    // };
    

    // async function GetWFSData() {
    //     const res = await axios.get('http://34.67.131.141:8080/geoserver/app1/wfs?request=GetFeature&version=1.0.0&typeName=app1:ING_FINAL&outputFormat=json')
    //     await setData(res.data)
    //     console.log(data)
    // };

    
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

            <div className="sidebar">
                <h2>Informacion del poligono</h2>
            </div>

            <div className="map">
                <MapComponent  />
            </div>
        </main>
    )
}
