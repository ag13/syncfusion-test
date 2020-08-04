import React from 'react';
import './App.css';
import {
  DiagramComponent
} from "@syncfusion/ej2-react-diagrams"

let nodes = [
  {
    id: "node1",
    height: 100,
    width: 100,
    offsetX: 200,
    offsetY: 100,
    annotations: [
      {
        content: "React"
      }
    ]
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

function App() {
  return (
    <div className="App">
       <DiagramComponent id="diagram" width={"100%"} height={"550px"} nodes={nodes}
    connectors={connectors} />
    </div>
  );
}

export default App;
