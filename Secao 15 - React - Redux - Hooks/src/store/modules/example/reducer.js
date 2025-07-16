const initialState = {
  botaoClicado: false,
};

export default function(state = initialState, action) {
  switch(action.type){
    case 'BOTAO_CLICADO':{
      const newState = {...state};
      newState.botaoClicado = !newState.botaoClicado;
      state = newState;
      return state;
    }
    default:{
      return state;
    }
  }
};