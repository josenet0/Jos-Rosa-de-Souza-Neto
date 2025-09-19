import React, { useContext } from 'react';
import TarefasContext from '../context/TarefasContext';
import Tarefa from './Tarefa';

function ListaDeTarefas() {
  const { state } = useContext(TarefasContext);

  const tarefasFiltradas = state.tarefas.filter(tarefa => {
    if (state.filtro === 'todas') return true;
    if (state.filtro === 'concluidas') return tarefa.concluida;
    if (state.filtro === 'pendentes') return !tarefa.concluida;
    return true;
  });

  return (
    <ul>
      {tarefasFiltradas.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default ListaDeTarefas;