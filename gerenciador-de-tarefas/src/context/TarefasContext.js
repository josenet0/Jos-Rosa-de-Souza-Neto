import React, { createContext, useReducer } from 'react';

const TarefasContext = createContext();

const estadoInicial = {
  tarefas: [],
  filtro: 'todas'
};

function tarefasReducer(state, action) {
  switch(action.type) {
    case 'ADICIONAR_TAREFA':
      return { ...state, tarefas: [...state.tarefas, action.payload] };
    case 'TOGGLE_CONCLUIDA':
      return {
        ...state,
        tarefas: state.tarefas.map(tarefa =>
          tarefa.id === action.payload
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa
        )
      };
    case 'SET_FILTRO':
      return { ...state, filtro: action.payload };
    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(tarefasReducer, estadoInicial);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}

export default TarefasContext;
