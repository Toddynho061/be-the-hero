import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'
export default function Routes() {
    return (
        <BrowserRouter>
            {/* Responsavel fazer que cada rota seja executada por momento */}
        <Switch>
            {/* exact o caminho tem que ser exatamente igual */}
            <Route path='/' exact component={Logon} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />

            <Route path='/incidents/new' component={NewIncident} />
        </Switch>

        </BrowserRouter>
    )
}