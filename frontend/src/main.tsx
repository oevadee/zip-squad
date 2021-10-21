import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { App } from './App';
import { Provider } from 'urql';
import { client } from 'api/graphql/config';
import { UserProvider } from './providers/user';
import Modal from 'react-modal';

Modal.setAppElement('#root');

ReactDOM.render(
    <React.StrictMode>
        <Provider value={client}>
            <UserProvider>
                <GlobalStyle />
                <App />
            </UserProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
