//imports
import React, { useContext } from 'react';
import { Map, TileLayer, LayersControl, LayerGroup, } from 'react-leaflet';
import { CRS } from 'leaflet';
import { FeatureContext } from './FeatureContext';
import VectorTilesLayer from './VectorTilesLayer';

//FUNCTIONAL COMPONENT
export default function MapComponent({ data }) {
    const { feature, elaMethod } = useContext(FeatureContext);
    const [, setFeatureValue] = feature;
    const [ , setElaMethodValue] = elaMethod;

    //funcion para añadir datos del poligono seleccionado al context.
    function getFeatureData(featureData) {
        setElaMethodValue('0');
        setFeatureValue(featureData);
    }


    //JSX
    return (
        <Map center={[-34.238347, -70.250921]} zoom={8} minZoom={8} maxZoom={12} maxBounds={[[-35.494268, -70.735148], [-32.963408, -69.766694]]} crs={CRS.EPSG3857} >
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


                <LayersControl.Overlay checked name="Area de Estudio">
                    <TileLayer url="http://34.121.165.39/teselas/CBase/{z}/{x}/{y}.png" tms={false} />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Etiquetas">
                    <TileLayer url="http://34.121.165.39/teselas/Label/{z}/{x}/{y}.png" tms={false} />
                </LayersControl.Overlay>

                <VectorTilesLayer url="http://34.121.165.39/teselas/ING_VT/{z}/{x}/{y}.pbf" clickHandler={(e) => getFeatureData(e.layer.properties)} />

                
                
            </LayersControl>
        </Map>
    )
}