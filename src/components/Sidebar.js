import React, { useContext } from 'react'
import { FeatureContext } from './FeatureContext'

export default function Sidebar() {
    const [feature] = useContext(FeatureContext);

    return (
        <div className="sidebar">

            <div className="titulo">
                <h1>{feature.NOMBRE}</h1>
            </div>

            <div className="data">
                <p>{feature.COD_GLA}</p>
            </div>
        </div>
    )
}
