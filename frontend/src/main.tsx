import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { Provider } from 'urql';
import { client } from 'api/graphql/config';
import { UserProvider } from './providers/user';

ReactDOM.render(
    <React.StrictMode>
        <Provider value={client}>
            <UserProvider>
                <Router>
                    <GlobalStyle />
                    <App />
                </Router>
            </UserProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
