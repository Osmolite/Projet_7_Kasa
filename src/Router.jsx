import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index'
import Logement from './pages/Logement/index'
import About from './pages/About/index'
import ErrorPage from './pages/ErrorPage/index'

//Création des routes de navigation entre les différentes pages de l'application avec React router dom

function Router () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/logement/:id" element={<Logement />}/>
            <Route path="/About" element={<About />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router;