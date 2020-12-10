import React, { Component, } from 'react'
import MapComponent from './MapComponent';
import Sidebar from './Sidebar'
const axios = require('axios');


export default class App1 extends Component {
    state={
        mapdata: Object,
        isReady: Boolean,
    }

    async componentDidMount(){
        const res = await axios.get('http://34.67.131.141:8080/geoserver/app1/wfs?service=wfs&request=GetFeature&version=1.0.0&typeName=app1:ING_FINAL&SRSName=EPSG:4326&outputFormat=json')
        await this.setState({
            mapdata: res.data,
            isReady: true
        })
    };

    render() {
        if(!this.state.isReady) {
            return(
                <h1>Cargando</h1>
            )
        } else if (this.state.isReady){
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
                        <MapComponent data={this.state.mapdata}/>
                    </div>
                </main>
            )
        }
    }
}
