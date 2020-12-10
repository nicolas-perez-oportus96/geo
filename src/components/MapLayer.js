import React, { Component} from 'react'
import { GeoJSON } from 'react-leaflet';

export default class MapLayer extends Component {

    leafletRef = React.createRef();

    style(feature) {
        return {
            // the fillColor is adapted from a property which can be changed by the user (segment)
            fillColor: "#39d2ff",
            fillOpacity: 0.7,
            color: "#000000",
            weight: 1,
            dashArray: "1"

        };
    };

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.leafletRef.current.leafletElement.clearLayers();
            this.leafletRef.current.leafletElement.addData(this.props.data);
            console.log(this.props.data);
        }
    }

    onEachFeature(feature, layer) {
        console.log(2)
    }

    getFeature = (e) => {
        this.props.getFeatureData(e.sourceTarget.feature.properties);
    }

    render() {
        return <GeoJSON
        data = { this.props.data.features }
        onEachFeature = { this.onEachFeature }
        ref = { this.leafletRef }
        onclick = {this.getFeature}
        style = { this.style}
        />
    }
}