import React from 'react'
import { Table } from 'react-bootstrap';

export class Alunos extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            alunos: []
        }
    }

    render(){
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Leandro</td>
                    <td>leandro@gmail.com</td>
                    <td>Atualizar / Excluir</td>
                </tr>
            </tbody>
        </Table>
    )
}
}