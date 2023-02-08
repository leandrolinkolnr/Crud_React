import './App.css';
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'
import { Alunos } from './components/Alunos'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Aplicação React</h1>
      <BrowserRouter>
      <ul>
        <li> <Link to="/"> Pagina inicial </Link></li>
        <li> <Link to="/alunos"> Cadastro de Alunos </Link></li>
        <li> <Link to="/sobre">Sobre </Link></li>
      </ul>
      <Routes>
        <Route path="/" index element={ <Home/> }></Route>
        <Route path="/alunos" element={ <Alunos /> }></Route>
        <Route path="/sobre" element={ <Sobre /> }></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
