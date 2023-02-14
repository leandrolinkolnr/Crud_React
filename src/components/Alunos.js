import React from 'react'
import { Button, Table, Form } from 'react-bootstrap';
import axios from "axios";

export class Alunos extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nome: '',
            email: '',
            alunos: []
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
                alert("Aluno deletado com sucesso!");
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

    cadastraAluno = (aluno) => {
        fetch("http://localhost:3000/alunos/", {method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(aluno)
    })
        .then(resposta => {
            if(resposta.ok){
                alert("Aluno cadastrado com sucesso!");
                this.buscarAluno();
            } else {
                alert("Não foi possivel cadastrar o aluno!");
            }
        })
    }

renderTabela(){
    return  <Table striped bordered hover>
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
}

render()    {
    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome do aluno" value={this.aluno.nome} onChange={this.atualizaNome} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite o email do aluno" value={this.aluno.email} onChange={this.atualizaEmail}/>
                </Form.Group>
        
                <Button variant="primary" type="submit" onClick={this.submit}>
                    Adicionar
                </Button>
            </Form>

            {this.renderTabela()}
        </div>
    )
}

atualizaNome = (e) => {
    this.setState(
        {
            nome: e.target.value
        }
    )
}

atualizaEmail = (e) => {
    this.setState(
        {
            email: e.target.value
        }
    )
}


submit(){
    const aluno = {
        id:0,
        nome: this.state.nome,
        email: this.state.email
    }

    this.cadastraAluno(aluno);
}

}