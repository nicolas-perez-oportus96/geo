import React, { useContext } from 'react';
import { Map, TileLayer, LayersControl, LayerGroup, WMSTileLayer, withLeaflet} from 'react-leaflet';
import { BingLayer } from 'react-leaflet-bing-v2';
import L, { CRS, tileLayer } from 'leaflet';
import MapLayer from './MapLayer';
import { FeatureContext } from './FeatureContext';
import VectorGridDefault from "react-leaflet-vectorgrid";
const bing_key = "ArSPuxaxB8bp-VtsbY3jIUaocR9WLqKRM5X1rhjQLHHwolRjr5oAoUZ436gUVrvM";


export default function MapComponent({ data }) {
    const [feature, setFeature] = useContext(FeatureContext);

    function getFeatureData(featureData) {
        setFeature(featureData);
        console.log(feature)
    }

    const vectorStyles = {
        ING_FINAL: {
          fill: true,
          weight: 1,
          fillColor: "#ff00ff",
          color: "#ff00ff",
          fillOpacity: 0.9,
          opacity: 0.9,
          maxNativeZoom: 14,
          minNativeZoom: 1
        }
      };
      const VectorGrid = withLeaflet(VectorGridDefault);
      const options = {
        tolerance: 30, // 5 simplification tolerance (higher means simpler)
        extent: 4096, //4096, // 4096 tile extent (both width and height)
        buffer: 128, // 64 default 64tile buffer on each side
        rendererFactory: L.svg.tile ,
        type: "protobuf",
        url: "http://35.184.122.36/ING_VT/{z}/{x}/{y}.pbf",
        vectorTileLayerStyles: vectorStyles,
        subdomains: "abcd",
        key: "abcdefghi01234567890",
        interactive: true,
        zIndex: 401
      };

    return (
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
                    <BingLayer bingkey={bing_key} />
                </LayersControl.BaseLayer>

                <LayersControl.Overlay name="Area de Estudio">
                    <TileLayer active url="http://35.184.122.36/Tiles3/{z}/{x}/{y}.png" tms={false} />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Capa de Glaciares">
                    <WMSTileLayer url="http://34.67.131.141:8080/geoserver/app1/wms" layers={'app1:ING_FINAL'} tms={false} crs={CRS.EPSG4326} format={'image/png'} transparent={true} />
                </LayersControl.Overlay>

                {/* <LayersControl.Overlay name="Capa de Glaciares GEOJSON">
                    <MapLayer data={data} getFeatureData={getFeatureData} />
                </LayersControl.Overlay> */}

                <VectorGrid {...options}  onClick={ (e) => (getFeatureData(e.layer.properties))  } />
                
            </LayersControl>
        </Map>
    )
}