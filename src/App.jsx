import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/index'
import Logement from './pages/Logement/index'
import About from './pages/About/index'
import ErrorPage from './pages/ErrorPage/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


function App () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/logement/:id" element={<Logement />}/>
            <Route path="/About" element={<About />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    )
}
export default App;