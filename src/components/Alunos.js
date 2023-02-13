import React from 'react'
import { Table } from 'react-bootstrap';

export class Alunos extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            alunos: [
                {'id': 1, 'nome': 'Luis Fabio', 'email':'luisf@gmail.com'},
                {'id': 13, 'nome': 'Leandro', 'email':'leandro13@gmail.com'}
            ]
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
            {
                this.state.alunos.map((aluno) =>
                <tr>
                    <td>{ aluno.nome }</td>
                    <td>{ aluno.email }</td>
                    <td>Atualizar / Excluir</td>
                </tr> 
                ) 
            }

            </tbody>
        </Table>
    )
}
}