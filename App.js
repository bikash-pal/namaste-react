
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div',{id:'parent'},[
  React.createElement("div",{id:'child1'},[
    React.createElement('h1',{},"I am in love wiht this"),
    React.createElement('h2',{},"I am in love love wiht this")
  ]),
  React.createElement("div",{id:'child2'},[
    React.createElement('h1',{},"I am in love wiht this"),
    React.createElement('h2',{},"I am in love love wiht this")
  ])
])

const header = React.createElement("h1",{},"Hello World From React Inside It!");
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(parent);