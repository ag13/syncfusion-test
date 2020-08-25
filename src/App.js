import './index.css';
import React, { useEffect, useState } from "react";
import { DiagramComponent, SymbolPaletteComponent, Node } from "@syncfusion/ej2-react-diagrams";
import './App.css'
/**
 * Diagram Default sample
 */

//Initialize the flowshapes for the symbol palatte
let flowshapes = [
    {
        id: "servicenow", shape: {
            scale: 'Stretch',
  type: 'Native', content: (`<g>
  <rect x="0" y="0" width="300" height="300" fill="white" stroke="black" border="1px solid black"></rect>
  <image xlink:href="https://www.eweek.com/imagesvr_ez/b2bezp/2020/01/ServiceNow.logo.jpg?alias=article_hero" x="20" y="20" width="200px" height="250px" />
  <text x="15" y="250" font-family="Arial" line-height="2.6" font-size="20" fill="black">Service Now</text>
</g>`),
       }
    },
    {
        id: "mysql", shape: {
            scale: 'Stretch',
  type: 'Native', content: (`<g>
  <rect x="0" y="0" width="300" height="300" fill="white" stroke="black" border="1px solid black"></rect>
  <image xlink:href="https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png" x="20" y="20" width="200px" height="250px" />
<text x="15" y="250" font-family="Arial" line-height="2.6" font-size="20" fill="black" onClick={handleClick}>My SQL</text>
</g>`),
       }
    },
    {
        id: "platformDataLake", shape: {
            scale: 'Stretch',
  type: 'Native', content: (`<g>
  <rect x="0" y="0" width="300" height="300" fill="white" stroke="black" border="1px solid black"></rect>
  <image xlink:href="https://image.shutterstock.com/image-vector/database-vector-icon-server-storage-260nw-577507285.jpg" x="20" y="20" width="200px" height="250px" />
  <text x="15" y="250" font-family="Arial" line-height="2.6" font-size="20" fill="black">Platform Data Lake</text>
</g>`),
       }
    },
    {
        id: "incidentsAnalysis", shape: {
            scale: 'Stretch',
  type: 'Native', content: (`<g>
  <rect x="0" y="0" width="300" height="300" fill="white" stroke="black" border="1px solid black"></rect>
  <image xlink:href="https://www.eweek.com/imagesvr_ez/b2bezp/2020/01/ServiceNow.logo.jpg?alias=article_hero" x="20" y="20" width="200px" height="250px" />
  <text x="15" y="250" font-family="Arial" line-height="2.6" font-size="20" fill="black">Incidents Analysis</text>
</g>`),
       }
    },
    {
        id: "insights", shape: {
            scale: 'Stretch',
  type: 'Native', content: (`<g>
  <rect x="0" y="0" width="300" height="300" fill="white" stroke="black" border="1px solid black"></rect>
  <image xlink:href="https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/68403f67-17f5-49cb-b691-91ad3e27ebf1/File/bfa2a8d2c8d8c786c334d9ac01dfc629/1__ffpkcwd_kwqmc7oevcrbq.jpeg" x="20" y="20" width="200px" height="250px" />
  <text x="15" y="250" font-family="Arial" line-height="2.6" font-size="20" fill="black">Insights</text>
</g>`),
       }
    },
    {
        id: "dashboardDesigner", shape: {
            scale: 'Stretch',
  type: 'Native', content: (`<g>
  <rect x="0" y="0" width="300" height="300" fill="white" stroke="black" border="1px solid black"></rect>
  <image xlink:href="https://i.dlpng.com/static/png/6988411_preview.png" x="20" y="20" width="200px" height="250px" />
  <text x="15" y="250" font-family="Arial" line-height="2.6" font-size="20" fill="black">Dashboard Designer</text>
</g>`),
       }
    },
    {
        id: "qlikSense", shape: {
            scale: 'Stretch',
  type: 'Native', content: (`<g>
  <rect x="0" y="0" width="300" height="300" fill="white" stroke="black" border="1px solid black"></rect>
  <image xlink:href="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/af/15/07/af1507d8-35ff-f9d3-46be-401d002a8ab2/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png" x="20" y="20" width="200px" height="250px" />
  <text x="15" y="250" font-family="Arial" line-height="2.6" font-size="20" fill="black">Qlik Sense</text>
</g>`),
       }
    }
];
//Initializes connector symbols for the symbol palette
let connectorSymbols = [
    {
        id: "Link1",
        type: "Orthogonal",
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: "Arrow" },
        style: { strokeWidth: 1 }
    },
    {
        id: "link3",
        type: "Orthogonal",
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeWidth: 1 },
        targetDecorator: { shape: "None" }
    },
    {
        id: "Link21",
        type: "Straight",
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: "Arrow" },
        style: { strokeWidth: 1 }
    },
    {
        id: "link23",
        type: "Straight",
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeWidth: 1 },
        targetDecorator: { shape: "None" }
    },
    {
        id: "link33",
        type: "Bezier",
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        style: { strokeWidth: 1 },
        targetDecorator: { shape: "None" }
    }
];
let interval;
interval = [
    1,
    9,
    0.25,
    9.75,
    0.25,
    9.75,
    0.25,
    9.75,
    0.25,
    9.75,
    0.25,
    9.75,
    0.25,
    9.75,
    0.25,
    9.75,
    0.25,
    9.75,
    0.25,
    9.75
];
let gridlines = {
    lineColor: "#e0e0e0",
    lineIntervals: interval
};
let diagramInstance;
export default () => {

    const [palettes, setPalettes] = useState([])
    const [loading, setLoading] = useState(true)

    const handleSave = () => {
        if(diagramInstance){
            console.log(diagramInstance.getPersistData())
            console.log(diagramInstance.getActiveLayer())
            console.log(diagramInstance.getDiagramContent())
            console.log(diagramInstance.getConnectorObject())
            const savedData = diagramInstance.saveDiagram()
            console.log('saveddata', savedData)
            setTimeout(() => {
                diagramInstance.loadDiagram(savedData)
            }, 5000)
            
        }
    }

    useEffect(() => {
        if(diagramInstance){
            console.log(diagramInstance.getEdges())

        }
    })

    useEffect(() => {
        setTimeout(() => {
            setPalettes([
                {
                    id: "flow",
                    expanded: true,
                    symbols: flowshapes,
                    iconCss: "e-diagram-icons1 e-diagram-flow",
                    title: "Flow Shapes"
                },
                {
                    id: "connectors",
                    expanded: true,
                    symbols: connectorSymbols,
                    iconCss: "e-diagram-icons1 e-diagram-connector",
                    title: "Connectors"
                }
            ]) 
            setLoading(false) 
        }, 1000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            addEvents();
            diagramInstance.fitToPage();
        })
        
    }, [])

        return (<div className="control-pane">
        <div className="control-section">
          <div style={{ width: "100%" }}>
              <button onClick={handleSave}>Save</button>
            <div className="sb-mobile-palette-bar">
              <div id="palette-icon" style={{ float: "right", role: "button" }} className="e-ddb-icons1 e-toggle-palette"></div>
            </div>
            <div id="palette-space" className="sb-mobile-palette">
                {
                    loading && <div style={{margin: '50px'}}>Loading Palette in 5 seconds...</div>
                }
                {
                    !loading && 
                
              <SymbolPaletteComponent id="symbolpalette" expandMode="Multiple" palettes={palettes} width={"100%"} height={"700px"} symbolHeight={260} symbolWidth={260} getNodeDefaults={(symbol) => {
                  
            if (symbol.id === "Terminator" ||
                symbol.id === "Process" ||
                symbol.id === "Delay") {
                symbol.width = 80;
                symbol.height = 40;
            }
            else if (symbol.id === "Decision" ||
                symbol.id === "Document" ||
                symbol.id === "PreDefinedProcess" ||
                symbol.id === "PaperTap" ||
                symbol.id === "DirectData" ||
                symbol.id === "MultiDocument" ||
                symbol.id === "Data") {
                symbol.width = 50;
                symbol.height = 40;
            }
            else {
                symbol.width = 50;
                symbol.height = 50;
            }
        }} symbolMargin={{ left: 15, right: 15, top: 15, bottom: 15 }} getSymbolInfo={(symbol) => {
            return { fit: true };
        }}/>
        }
            </div>
            <div id="diagram-space" className="sb-mobile-diagram">
              <DiagramComponent id="diagram" ref={diagram => (diagramInstance = diagram)} width={"100%"} height={"700px"} snapSettings={{
            horizontalGridlines: gridlines,
            verticalGridlines: gridlines
        }} 
        getEdges={(args) => {console.log('diagram edges', args)}} 
        getNodeDefaults={(node) => {
            let obj = {};
            if (obj.width === undefined) {
                obj.width = 145;
            }
            else {
                let ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
            }
            obj.style = { fill: "#357BD2", strokeColor: "white" };
            obj.annotations = [
                { style: { color: "white", fill: "transparent" } }
            ];
            //Set ports
            obj.ports = getPorts(node);
            return obj;
        }} //Sets the default values of a connector
         getConnectorDefaults={(obj) => {
            if (obj.id.indexOf("connector") !== -1) {
                obj.type = "Orthogonal";
                obj.targetDecorator = {
                    shape: "Arrow",
                    width: 10,
                    height: 10
                };
            }
        }} 
        //Sets the Node style for DragEnter element.
        doubleClick={(args) => {
            console.log('double clicked', args)
        }}
        dragEnter={(args) => {
            let obj = args.element;
            if (obj instanceof Node) {
                let oWidth = obj.width;
                let oHeight = obj.height;
                let ratio = 100 / obj.width;
                obj.width = 100;
                obj.height *= ratio;
                obj.offsetX += (obj.width - oWidth) / 2;
                obj.offsetY += (obj.height - oHeight) / 2;
                obj.style = { fill: "#357BD2", strokeColor: "white" };
            }
        }}/>
            </div>
          </div>
        </div>
      </div>);
    }
function getPorts(obj) {
    let ports = [
        { id: "port1", shape: "Circle", offset: { x: 0, y: 0.5 } },
        { id: "port2", shape: "Circle", offset: { x: 0.5, y: 1 } },
        { id: "port3", shape: "Circle", offset: { x: 1, y: 0.5 } },
        { id: "port4", shape: "Circle", offset: { x: 0.5, y: 0 } }
    ];
    return ports;
}
let isMobile;
function addEvents() {
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (isMobile) {
        let paletteIcon = document.getElementById('palette-icon');
        if (paletteIcon) {
            paletteIcon.addEventListener('click', () => {}, false);
        }
    }
}
