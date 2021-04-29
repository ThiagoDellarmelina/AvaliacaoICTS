import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Inicio from '../paginas/index'

const Rotas = () => { 
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                </Switch>
            </BrowserRouter>

    )
}



export default Rotas