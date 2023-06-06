import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/index'
import Logement from './pages/Logement/index'

function App () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/logement/:id" element={<Logement />}/>
        </Routes>
    )
}
export default App;