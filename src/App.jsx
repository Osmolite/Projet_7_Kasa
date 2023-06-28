import React from 'react';
import Router from './Router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App () {
    return (
        <Router/>
    )
}
export default App;