import React from 'react'


import UsuarioService from '../../app/usuarioService'

export default class ConsultaUsuarios extends React.Component {

    state = {
        usuarios: []
    }

    constructor(){
        super()
        this.service = new UsuarioService();
    }

    
    // componentDidMount(){
    //     const usuarios = this.service.obterUsuarios();
    //     this.setState({ usuarios })
    // }

    render(){
        return (
            <div className="card">
            <div className="card-header">
                Consulta de produto
            </div>
            <div className="card-body"></div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>SKU</th>
                        <th>Preço</th>
                        <th>Fornecedor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.usuarios.map( (usuario, index) => {
                        return (
                            <tr key={index}>
                                <th>{usuario.nome}</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div> 
        )
    }
}