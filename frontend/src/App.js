import React, { Component, useEffect } from 'react';
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
import Login from './page/Login';
import Register from './page/Register';
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
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Register",
    element: <Register/>,
  },
]);

class App extends Component {
  componentDidMount() {
    if(localStorage.getItem("isLogined") === null){
      localStorage.setItem("isLogined", false)
    };
  }

  render(){
    return(
      <React.StrictMode>
        <Header/>
        <RouterProvider router={router}/>
      </React.StrictMode>
    )
  }
}

export default App