import React from 'react'
import { Button, Table, Form } from 'react-bootstrap';


export class Alunos extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id : 0,
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
                this.buscarAluno();
                alert("Aluno deletado com sucesso!");
            }
        })
    } 


      cadastraAluno(aluno) {
        fetch("http://localhost:3000/alunos/", {method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(aluno)
    })
        .then(resposta => {
            if(resposta.ok){
                this.buscarAluno();
                alert("Aluno cadastrado com sucesso!");
            } else {
                alert("Não foi possivel cadastrar o aluno!");
            }
        }) 
    }


    atualizarAluno(aluno) {
        alert(aluno.id)
        fetch('http://localhost:3000/alunos/' + aluno.id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(aluno)
        }).then((resposta) => {
          if (resposta.ok) {
            this.buscarAlunos();
          } else {
            alert(JSON.stringify(resposta));
          }
        });
      }
    


    carregarDados = (id) => {
        fetch("http://localhost:3000/alunos/"+id, {method: 'GET'})
        .then(resposta => resposta.json() )
        .then(aluno => {
            this.setState({id: aluno.id, nome: aluno.nome, email: aluno.email})
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
                    <td><Button variant="secondary" onClick={() => this.carregarDados(aluno.id)} >Atualizar</Button> / <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)} >Excluir</Button> </td>
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
                
             <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" value={this.state.id} readOnly={true} />
                </Form.Group> 
                                    
                <Form.Group className="mb-3" >
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome do aluno" value={this.state.nome} onChange={this.atualizaNome} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite o email do aluno" value={this.state.email} onChange={this.atualizaEmail}/>
                </Form.Group>
        
                <Button variant="primary" type="submit" onClick={this.submit}>
                    Salvar
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


submit = () => {
    if(this.state.id == 0 ){
        const aluno = {
            nome: this.state.nome,
            email: this.state.email
        }
        this.cadastraAluno(aluno);

    } else {
        const aluno = {
            id: this.state.id,
            nome: this.state.nome,
            email: this.state.email
        }
        this.atualizarAluno(aluno); 
    }
} 

}