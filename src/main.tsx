import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
