

const initialState = {idtasks:0};

  export const idtasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'IDTASKS_UPDATE':
        return {
          ...state,
          idtasks: action.idtasks
        };
      default:
        return state;
    }
  };