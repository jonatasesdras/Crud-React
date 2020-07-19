import React, { Component } from 'react';
import api from './api';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';


class Body extends Component {
    state = {
        nomes: [],
    }

    async componentDidMount() {
        const response = await api.get('');
        //console.log(response.data);

        this.setState({ nomes: response.data });
    }

    render() {
        var opa = []
        const { nomes } = this.state;

        for (let pos in nomes.result) {
            let todos = (nomes.result[pos])
            //console.log(nomes.result[pos].first_name)
            //console.log(todos.id)
            opa.push(todos)
        }
        console.log(opa)

        // return (
        //     <div>
        //         <h1>Listar</h1>      

        //         {opa.map(nome => (
        //             <li key={nome.id}>
        //                 {nome.first_name}
        //             </li>
        //         ))}
        //     </div>
        // )
        return (
            <div>
                <Button color="primary">Inserir</Button>{' '}
                <Button color="success">Listar</Button>{' '}
                <Button color="warning">Atualizar</Button>{' '}
                <Button color="danger">Apagar</Button>{' '}
                
                <div class="col-md-6">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>E-mail</th>
                                <th>Fone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {opa.map(nome => (
                                <tr>
                                    <th key={nome.id} scope="row">{nome.id}</th>
                                    <td key={nome.id} scope="row">{nome.first_name}</td>
                                    <td key={nome.id} scope="row">{nome.last_name}</td>
                                    <td key={nome.id} scope="row">{nome.email}</td>
                                    <td key={nome.id} scope="row">{nome.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                
            </div>
        );

    }
}

/*const Body = (props) => {
    return (
      <div>
        <Button color="primary">Inserir</Button>{' '}
        <Button color="success">Listar</Button>{' '}
        <Button color="warning">Atualizar</Button>{' '}
        <Button color="danger">Apagar</Button>{' '}
        <Table striped>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>E-mail</th>
                <th>Fone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>(79)9999-9999</td>
                </tr>
            </tbody>
        </Table>
      </div>
    );
  }*/

export default Body;