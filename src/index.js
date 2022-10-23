import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import "modern-normalize";
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/studentvlad5.github.io/goit-react-hw-05-movies/">
  <App/>
   </BrowserRouter>
  </React.StrictMode>
);
