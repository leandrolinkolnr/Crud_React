import React from 'react'
import { Button, Table } from 'react-bootstrap';
import axios from "axios";

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
        fetch("http://localhost:3000/alunos/"+id, {method: 'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                alert("Post deleted!");
                this.buscarAluno();
            }
        })
    } 

    /*
    deletarAluno(id) {
        axios
          .delete("http://localhost:3000/alunos/"+id)
          .then(() => {
            alert("Post deleted!");
            this.buscarAluno();
          });
      } */


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