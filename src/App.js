import PokemonItem from './components/PokemonItem'
import { Route,  Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import PokemonList from './pages/PokemonList';
import Pokemon from './pages/Pokemon';

function App() {

  const navigate = useNavigate() 

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/login' element={<Login/>}   />
          <Route path='/pokedex'  element={<PokemonList/>}  />
          <Route path='/pokedex/:id'  element={<Pokemon/>}  />
        </Routes>
        <button onClick={ () => navigate(-1)}>Regresar</button>
      </header>
    </div>
  );
}

export default App;
