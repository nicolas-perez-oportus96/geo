import React, { useState, createContext } from 'react';

export const FeatureContext = createContext();

export const FeatureProvider = props => {
    const [feature, setFeature] = useState({});
    const [elaMethod, setElaMethod] = useState('0');
    const [elaFeature, setElaFeature] = useState({});


    return <FeatureContext.Provider 
        value={{ 
            feature: [feature, setFeature], 
            elaMethod: [elaMethod, setElaMethod], 
            elaFeature: [elaFeature, setElaFeature]
        }}> 
            {props.children} 
        </FeatureContext.Provider>
}



