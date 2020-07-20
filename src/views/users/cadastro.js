import React from 'react'

const estadoInicial = {
    nome: '',
    sobrenome: '',
    email: '',
    tlefone: '',
    sucesso: false,
    errors: []
}

export default class CadastroUsuario extends React.Component {

    state = estadoInicial;

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            email: this.state.email,
            telefone: this.state.telefone
        }
        try {
            this.service.salvar(produto)
            this.limpaCampos()
            this.setState({ sucesso: true })
        } catch (erro) {
            const errors = erro.errors
            this.setState({errors : errors})
        }
    }

    limpaCampos = () => {
        this.setState(estadoInicial)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Usuário
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text"
                                    name="nome"
                                    onChange={this.onChange}
                                    value={this.state.nome}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Sobrenome: *</label>
                                <input type="text"
                                    name="sobrenome"
                                    onChange={this.onChange}
                                    value={this.state.sobrenome}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Email: *</label>
                                <input type="text"
                                    name="email"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Telefone: *</label>
                                <input type="text"
                                    name="telefone"
                                    onChange={this.onChange}
                                    value={this.state.telefone}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>

                        <div className="col-md-1">
                            <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}