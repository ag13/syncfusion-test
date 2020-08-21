import React, { useCallback } from 'react';
import './App.css';
import {
  DiagramComponent
} from "@syncfusion/ej2-react-diagrams"


// TODO - Get node data in content or template


function App() {

  // const [nodes, setNodes] = useState([])
  // const [connectors, setConnectors] = useState([])
  let diagramInstance

  // useEffect(() => {

  //   setTimeout(() => {
  //     let nodes = [
  //       {
  //         id: "node1",
  //         height: 100,
  //         width: 100,
  //         offsetX: 200,
  //         offsetY: 100,
  //         shape: {
  //           type: 'HTML',
  //         }
  //       },
  //       {
  //         id: "node2",
  //         height: 100,
  //         width: 100,
  //         offsetX: 400,
  //         offsetY: 300,
  //         annotations: [
  //           {
  //             content: "SQL"
  //           }
  //         ]
  //       },
  //       {
  //         id: "node3",
  //         height: 100,
  //         width: 100,
  //         offsetX: 400,
  //         offsetY: 450,
  //         annotations: [
  //           {
  //             content: "Angular"
  //           }
  //         ]
  //       },
  //       {
  //         id: "node4",
  //         height: 100,
  //         width: 100,
  //         offsetX: 200,
  //         offsetY: 250,
  //         annotations: [
  //           {
  //             content: "Java"
  //           }
  //         ]
  //       }
  //     ];
  //     setNodes(nodes)
  //   }, 4000 )

  //   let connectors = [
  //     {
  //       id: "connector1",
  //       sourceID: "node1",
  //       targetID: "node2"
  //     },
  //     {
  //       id: "connector2",
  //       sourceID: "node2",
  //       targetID: "node3"
  //     },
  //     {
  //       id: "connector3",
  //       sourceID: "node1",
  //       targetID: "node4"
  //     },
  //     {
  //       id: "connector4",
  //       sourceID: "node1",
  //       targetID: "node4"
  //     }
  //   ];

  //   setConnectors(connectors)
  // }, [])

  let nodes = [
    {
      id: "node1",
      height: 100,
      width: 100,
      offsetX: 200,
      offsetY: 100,
      shape: {
        type: 'HTML',
      }
    },
    {
      id: "node2",
      height: 100,
      width: 100,
      offsetX: 400,
      offsetY: 300,
      annotations: [
        {
          content: "SQL"
        }
      ]
    },
    {
      id: "node3",
      height: 100,
      width: 100,
      offsetX: 400,
      offsetY: 450,
      annotations: [
        {
          content: "Angular"
        }
      ]
    },
    {
      id: "node4",
      height: 100,
      width: 100,
      offsetX: 200,
      offsetY: 250,
      annotations: [
        {
          content: "Java"
        }
      ]
    }
  ];
  // setNodes(nodes)

  let connectors = [
    {
      id: "connector1",
      sourceID: "node1",
      targetID: "node2"
    },
    {
      id: "connector2",
      sourceID: "node2",
      targetID: "node3"
    },
    {
      id: "connector3",
      sourceID: "node1",
      targetID: "node4"
    },
    {
      id: "connector4",
      sourceID: "node1",
      targetID: "node4"
    }
  ];

  // useEffect(() => {
  //   if(diagramInstance){

  //     let nodes = [
  //       {
  //         id: "node1",
  //         height: 100,
  //         width: 100,
  //         offsetX: 200,
  //         offsetY: 100,
  //         shape: {
  //           type: 'HTML',
  //         }
  //       },
  //       {
  //         id: "node2",
  //         height: 100,
  //         width: 100,
  //         offsetX: 400,
  //         offsetY: 300,
  //         annotations: [
  //           {
  //             content: "SQL"
  //           }
  //         ]
  //       },
  //       {
  //         id: "node3",
  //         height: 100,
  //         width: 100,
  //         offsetX: 400,
  //         offsetY: 450,
  //         annotations: [
  //           {
  //             content: "Angular"
  //           }
  //         ]
  //       },
  //       {
  //         id: "node4",
  //         height: 100,
  //         width: 100,
  //         offsetX: 200,
  //         offsetY: 250,
  //         annotations: [
  //           {
  //             content: "Java"
  //           }
  //         ]
  //       }
  //     ];
  //     // setNodes(nodes)

  //     let connectors = [
  //       {
  //         id: "connector1",
  //         sourceID: "node1",
  //         targetID: "node2"
  //       },
  //       {
  //         id: "connector2",
  //         sourceID: "node2",
  //         targetID: "node3"
  //       },
  //       {
  //         id: "connector3",
  //         sourceID: "node1",
  //         targetID: "node4"
  //       },
  //       {
  //         id: "connector4",
  //         sourceID: "node1",
  //         targetID: "node4"
  //       }
  //     ];
  
  //     // setConnectors(connectors)

  //     // TODO - not able to get the customized template for first node!!

  //     // diagramInstance.setNode
  //     // console.log()
  //     // diagramInstance.setNodeTemplate = setTemplate
      
  //     nodes.forEach(node => {
  //       diagramInstance.add(node)
  //     })
  //     connectors.forEach(connector => {
  //       diagramInstance.add(connector)
  //     })
  //   }
  // }, [diagramInstance])

  const setTemplate = useCallback((props) => {
    console.log('props',props)
    if(props.id === 'node1'){
      return (<button onClick={() => alert('test')}>Test</button>)
    }
  }, [])
  

  return (
    // <React.StrictMode>
      <div className="App">
        <DiagramComponent id="diagram" width={"100%"} height={"550px"} 
      ref={diagram => (diagramInstance = diagram)}
      nodeTemplate={setTemplate}
      created={(args) => {
        nodes.forEach(node => {
          diagramInstance.add(node)
        })
        connectors.forEach(connector => {
          diagramInstance.add(connector)
        })
      }}
       />
      </div>
    // </React.StrictMode>
  );
}

export default App;
