import React, { Component } from 'react'
import { Map, TileLayer,LayersControl, LayerGroup} from 'react-leaflet';
import { BingLayer } from 'react-leaflet-bing-v2'
import { CRS } from 'leaflet'
const bing_key = "ArSPuxaxB8bp-VtsbY3jIUaocR9WLqKRM5X1rhjQLHHwolRjr5oAoUZ436gUVrvM"

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

                <div className="sidebar">
                    <h2>Informacion del poligono</h2>
                </div>

                <div className="map">
                    <Map center={[-34.238347, -70.250921]} zoom={8} minZoom={6} maxZoom={12} maxBounds={[[-35.494268, -70.735148], [-32.963408, -69.766694]]} crs={CRS.EPSG3857} >
                        {/* Control de Capas */}
                        <LayersControl position="topright">
                        {/* GRUPO DE CAPAS WORLD IMAGERY+ SHADERELIEF */}
                            <LayersControl.BaseLayer checked name="HillShade" >
                                <LayerGroup>
                                    {/* ESRI WORLD IMAGERY */}
                                    <TileLayer
                                        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                    />
                                    {/* OPEN MAP SURFER HILLSHADE */}
                                    <TileLayer
                                        attribution='Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> | Map data  <a href="https://lpdaac.usgs.gov/products/aster_policies">ASTER GDEM</a>, <a href="http://srtm.csi.cgiar.org/">SRTM</a>'
                                        url="https://maps.heigit.org/openmapsurfer/tiles/asterh/webmercator/{z}/{x}/{y}.png"
                                    />
                                </LayerGroup>
                            </LayersControl.BaseLayer>

                            {/* ESRI Shaded Relief */}
                            <LayersControl.BaseLayer name="ESRI Shaded Relief">
                                <TileLayer
                                    attribution='Tiles &copy; Esri &mdash; Source: Esri'
                                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}"
                                />
                            </LayersControl.BaseLayer>

                            {/* BING Maps Satellital */}
                            <LayersControl.BaseLayer name="BING Maps Satellital">
                                <BingLayer  bingkey={bing_key} />
                            </LayersControl.BaseLayer>

                            <LayersControl.Overlay name="BASE">
                                <TileLayer url="http://192.168.0.31:8080/app1/{z}/{x}/{y}.png"  tms={false}  />
                
                            </LayersControl.Overlay>

                        </LayersControl>
                    </Map>
                </div>
            </main>
        )
    }
}
