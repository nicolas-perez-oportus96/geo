//imports
import React, { useContext } from 'react';
import { Map, TileLayer, LayersControl, LayerGroup, } from 'react-leaflet';
import { CRS } from 'leaflet';
import { FeatureContext } from './FeatureContext';
import VectorTilesLayer from './VectorTilesLayer';
import { DEV_AREA_ESTUDIO_URL, DEV_ETIQUETAS_URL, DEV_VT_URL } from '../properties'

//FUNCTIONAL COMPONENT
export default function MapComponent({ data }) {
    const { feature, elaMethod } = useContext(FeatureContext);
    const [, setFeatureValue] = feature;
    const [, setElaMethodValue] = elaMethod;

    //funcion para añadir datos del poligono seleccionado al context.
    const getFeatureData = (e) => {
        setElaMethodValue('0');
        setFeatureValue(e.layer.properties);
    };

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
                    <TileLayer url={DEV_AREA_ESTUDIO_URL} tms={false} />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Etiquetas">
                    <TileLayer url={DEV_ETIQUETAS_URL} tms={false} />
                </LayersControl.Overlay>

                <VectorTilesLayer url={DEV_VT_URL} clickHandler={getFeatureData} />

            </LayersControl>
        </Map>
    )
}