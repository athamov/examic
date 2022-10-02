import * as React from 'react';
import * as ClientDom from 'react-dom/client';
import App from './App'
import './index.css';

const container = document.getElementById('root');  
// import App from './src/App';
ClientDom.createRoot(container).render(<App />); 