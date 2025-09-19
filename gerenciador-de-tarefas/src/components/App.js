import React, { useState, useContext } from 'react';
import ListaDeTarefas from './ListaDeTarefas';
import TarefasContext from '../context/TarefasContext';
import './App.css';

function App() {
  const [textoTarefa, setTextoTarefa] = useState('');
  const { dispatch, state } = useContext(TarefasContext);

  function adicionarTarefa() {
    if (textoTarefa.trim() === '') return;

    const novaTarefa = {
      id: Date.now(),
      texto: textoTarefa,
      concluida: false,
    };

    dispatch({ type: 'ADICIONAR_TAREFA', payload: novaTarefa });
    setTextoTarefa('');
  }

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>

      <input
        type="text"
        value={textoTarefa}
        onChange={(e) => setTextoTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTRO', payload: 'todas' })}>Todas</button>
        <button onClick={() => dispatch({ type: 'SET_FILTRO', payload: 'concluidas' })}>Concluídas</button>
        <button onClick={() => dispatch({ type: 'SET_FILTRO', payload: 'pendentes' })}>Pendentes</button>
      </div>

      <ListaDeTarefas />
    </div>
  );
}

export default App;