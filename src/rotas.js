import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import CadastroUsuario from './views/users/cadastro'
import ConsultaUsuarios from './views/users/consulta'
import Body from './Body'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route exact path="/consulta-usuarios" component={ConsultaUsuarios} />
                <Route exact path="/body" component={Body} />
            </Switch>
        </HashRouter>
    )
}