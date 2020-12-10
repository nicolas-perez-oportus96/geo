import React, { useState, createContext } from 'react';

export const FeatureContext = createContext();

export const FeatureProvider = props => {
    const [feature, setFeature] = useState({});


    return <FeatureContext.Provider value={[feature, setFeature]}> {props.children} </FeatureContext.Provider>
}



