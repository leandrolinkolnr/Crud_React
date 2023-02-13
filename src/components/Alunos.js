import React from 'react'
import { Table } from 'react-bootstrap';

export class Alunos extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            alunos: [
            ]
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/alunos")
        .then(resposta => resposta.json() )
        .then(dados => {
            this.setState({alunos: dados})
        })
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