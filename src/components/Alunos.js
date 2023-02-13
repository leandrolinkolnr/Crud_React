import React from 'react'
import { Button, Table } from 'react-bootstrap';

export class Alunos extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            alunos: [
            ]
        }
    }

    componentDidMount(){
        this.buscarAluno();
    }

    buscarAluno = () => {
        fetch("http://localhost:3000/alunos")
        .then(resposta => resposta.json() )
        .then(dados => {
            this.setState({alunos: dados})
        })
    }

    deletarAluno = (id) => {
        //alert("Metodo chamado");
        fetch("http://localhost:3000/alunos/"+id, {method: 'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                this.buscarAluno();
            }
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
                    <td>Atualizar / <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)} >Excluir</Button> </td>
                </tr> 
                ) 
            }

            </tbody>
        </Table>
    )
}
}