import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './component/Header/Header';
import Main from './page/Main';
import Catalog from './page/Catalog';
import CatalogItem from './page/CatalogItem';
import About from './page/About';
import Cart from './page/Cart';
import Profile from './page/Profile';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "Catalog",
    element: <Catalog/>,
  },
  {
    path: "Catalog/:name",
    element: <CatalogItem  />,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Cart",
    element: <Cart/>,
  },
  {
    path: "Profile",
    element: <Profile/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);