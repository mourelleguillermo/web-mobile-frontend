import reportWebVitals from './reportWebVitals';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';
import { BrowserRouter, redirect } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);

const domain = "dev-ko6fes3pad6yuyzg.us.auth0.com"
const clientId = "j0wTxbbmDIGMQETiBg9z9tVydZvaSb26"
const redirectUri = window.location.origin

root.render(
  <BrowserRouter>
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: redirectUri, }}>
      <App />
    </Auth0Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
