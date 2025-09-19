import React, { useContext } from 'react';
import TarefasContext from '../context/TarefasContext';

function Tarefa({ tarefa }) {
  const { dispatch } = useContext(TarefasContext);

  function toggleConcluida() {
    dispatch({ type: 'TOGGLE_CONCLUIDA', payload: tarefa.id });
  }

  return (
    <li>
      <input 
        type="checkbox" 
        checked={tarefa.concluida} 
        onChange={toggleConcluida} 
      />
      <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
        {tarefa.texto}
      </span>
    </li>
  );
}

export default Tarefa;