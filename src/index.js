import React from 'react';
import App from './App';
//import { createRoot } from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';




const root= document.getElementById('root');

const rootNode = ReactDOM.createRoot(root)
rootNode.render(<App/>)

