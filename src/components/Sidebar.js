import React, { useContext, useEffect } from 'react';
import { FeatureContext } from './FeatureContext';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Sidebar() {
    const [feature] = useContext(FeatureContext);

    useEffect(() => {
        
    })

    if (Object.entries(feature).length !== 0){
        return (
            <div className="sidebar">
    
                <div className="titulo">
                    <h1>Información glaceológica</h1>
                </div>
    
                <Accordion allowZeroExpanded={true}>
    
                    {/* IDENTIFICACIÓN DEL GLACIAR */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                IDENTIFICACIÓN DEL GLACIAR
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>NOMBRE: <span>{feature.NOMBRE}</span></li>
                                <li>CÓDIGO WGI: <span>{feature.COD_GLA}</span></li>
                                <li>CÓDIGO BNI: <span>{feature.COD_BNA}</span></li>
                                <li>CLASIFICACIÓN WGI: <span>{feature.CLAS_WGI}</span> </li>
                                <li>CATEGORÍA DE CLASIFICACIÓN WGI: <span>{feature.CLASIFICA}</span></li>
                                <li>ZONA GLACIOLÓGICA: <span>{feature.ZONA_GLACI}</span></li>
                                <li>COORDENADA ESTE: <span>{feature.ESTE}</span></li>
                                <li>COORDENADA NORTE: <span>{feature.NORTE}</span></li>
                                <li>LATITUD: <span>{feature.LATITUD}</span></li>
                                <li>LONGITUD: <span>{feature.LONGITUD}</span></li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* LOCALIZACIÓN DEL GLACIAR EN LA DIVISIÓN POLÍTICO-ADMINISTRATIVA DE CHILE  */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                LOCALIZACIÓN DEL GLACIAR EN LA DIVISIÓN POLÍTICO-ADMINISTRATIVA DE CHILE 
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>CÓDIGO DE REGIÓN: <span>{feature.COD_REGION}</span></li>
                                <li>NOMBRE DE REGIÓN: <span>{feature.REGION}</span></li>
                                <li>CÓDIGO DE PROVINCIA: <span>{feature.COD_PROVIN}</span></li>
                                <li>NOMBRE DE PROVINCIA: <span>{feature.PROVINCIA}</span></li>
                                <li>CÓDIGO DE COMUNA: <span>{feature.COD_COM}</span></li>
                                <li>NOMBRE DE COMUNA: <span>{feature.COMUNA}</span></li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* LOCALIZACIÓN DEL GLACIAR EN LA DIVISIÓN DE CUENCAS HIDROGRÁFICAS DE CHILE*/}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                LOCALIZACIÓN DEL GLACIAR EN LA DIVISIÓN DE CUENCAS HIDROGRÁFICAS DE CHILE
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>CÓDIGO DE CUENCA: <span>{feature.COD_CUEN}</span></li>
                                <li>NOMBRE DE CUENCA: <span>{feature.NOMB_CUEN}</span></li>
                                <li>CÓDIGO DE SUBCUENCA: <span>{feature.COD_SCUEN}</span></li>
                                <li>NOMBRE DE SUBCUENCA: <span>{feature.NOMB_SCUEN}</span></li>
                                <li>CÓDIGO DE SUBSUBCUENCA: <span>{feature.COD_SSCUEN}</span></li>
                                <li>NOMBRE DE SUBSUBCUENCA: <span>{feature.NOMB_SSCUE}</span></li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* CARACTERIZACIÓN FÍSICA DEL GLACIAR */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                CARACTERIZACIÓN FÍSICA DEL GLACIAR
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>CUENCAS DE DRENAJE: <span>{feature.N_CUENDRE}</span></li>
                                <li>ÁREA TOTAL (Km²): <span>{feature.AREA_KM2}</span></li>
                                <li>ÁREA CUBIERTA (Km²): <span>{feature.AREA_CUB2}</span></li>
                                <li>PERÍMETRO (Km): <span>{feature.PERIMET}</span></li>
                                <li>VOLUMEN (m³): <span>{feature.VOLU_M3}</span></li>
                                <li>LARGO MÁXIMO (Km): <span>{feature.LMAXTOTAL}</span></li>
                                <li>LARGO PROMEDIO (Km): <span>{feature.LARGO_PROM}</span></li>
                                <li>ANCHO PROMEDIO (Km): <span>{feature.ANCHO_PROM}</span></li>
                                <li>ESPESOR MEDIO (m): <span>{feature.ESP_MED}</span></li>
                                <li>ALTITUD MÁXIMA (msnm): <span>{feature.HMAX}</span></li>
                                <li>ALTITUD MEDIA (msnm): <span>{feature.HMEDIA}</span></li>
                                <li>ALTITUD MÍNIMA TOTAL (msnm): <span>{feature.HMINTOTAL}</span></li>
                                <li>MEDIANA DE LA ALTITUD (msnm): <span>{feature.HMEDIANA}</span></li>
                                <li>ORIENTACIÓN: <span>{feature.ORIENTA}</span></li>
                                <li>PENDIENTE (grados): <span>{feature.PENDIENTE}</span></li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* ZONA DE ACUMULACIÓN */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ZONA DE ACUMULACIÓN
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>ÁREA ACUMULACIÓN (Km²): <span>{feature.AREA_ACUM}</span></li>
                                <li>LARGO MÁXIMO ACUMULADO (Km): <span>{feature.L_MAX_ACUM}</span></li>
                                <li>ORIENTACIÓN DE ACUMULACIÓN: <span>{feature.ORIENACUM}</span></li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* ZONA DE ABLACIÓN */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ZONA DE ABLACIÓN
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>ÁREA ABLACIÓN (Km²): <span>{feature.AREA_ABLAC}</span></li>
                                <li>LARGO MÁXIMO ABLACIÓN (Km): <span>{feature.LMAXABLAC}</span></li>
                                <li>ALTITUD MEDIA ABLACIÓN (msnm): <span>{feature.HMEDABLAC}</span></li>
                                <li>ORIENTACIÓN DE ABLACIÓN (msnm): <span>{feature.ORIENABLAC}</span></li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* ZONA DE EXPOSICIÓN */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ZONA DE EXPOSICIÓN
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>ÁREA EXPUESTA (Km²): <span>{feature.AREA_EXP}</span></li>
                                <li>LARGO MÁXIMO EXPUESTO (Km): <span>{feature.L_MAX_EXP}</span></li>
                                <li>ALTITUD MÍNIMA EXPUESTA (msnm): <span>{feature.HMINEXP}</span></li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                    {/* DATOS DEL LEVANTAMIENTO */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                DATOS DEL LEVANTAMIENTO
                            </AccordionItemButton>
                        </AccordionItemHeading>
    
                        <AccordionItemPanel>
                            <ul className="lista">
                                <li>FECHA DEL INVENTARIO: <span>{feature.INVENT_FEC}</span></li>
                                <li>FUENTE DE DIGITALIZACIÓN: <span>{feature.FUENTE_DIG}</span></li>
                                <li>FECHA DE LA FUENTE: <span>{feature.FUENTE_FEC}</span></li>
                                <li>DATUM: <span>{feature.DATUM}</span></li>
                                <li>HUSO: <span>{feature.HUSO}</span></li>
                                <li>PRECISIÓN DE MEDIDA (m²): <span>{feature.PRECM}</span></li>
                                <li>ERROR ABSOLUTO (km²): <span>{feature.ERROR_KM2}</span></li>
                                <li>ERROR PROPORCIONAL: <span>{feature.ERROR_PORC}</span></li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
    
                </Accordion>
            </div>
        )
    } else {
        return (
            <div className="sidebar">
                <div className="titulo">
                    <h1>Instrucciones</h1>
                </div>
                <div className="guia">
                    <p>Haz clic sobre un poligono para seleccionarlo y ver sus datos </p>
                </div>
            </div>
        )
    }


    


    
}

