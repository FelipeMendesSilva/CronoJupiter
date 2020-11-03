

const initialState = {
    tasks: [{
      id:22,
        dia: 7, mes: 11, ano: 2020,
        titulo: 'pedro',
        horario: [3, 4, 5],
        obs: 'pedro é pedreiro',
        cor: '#3bcf28'

    },{
      id:23,
        dia: 7, mes: 11, ano: 2020,
        titulo: 'sebastiao',
        horario: [8, 9],
        obs: 'sebastiao é motorista',
        cor: 'Coral'

    },{
      id:12,
        dia: 3, mes: 11, ano: 2020,
        titulo: 'joao',
        horario: [0, 1, 2],
        obs: 'joao é jornaleiro',
        cor: '#FFA500'

    },
    {
      id:11,
        dia: 2, mes: 11, ano: 2020,
        titulo: 'maria',
        horario: [8, 9, 10],
        obs: 'maria é enfermeira',
        cor: 'LightBlue'

    }]

};

  export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TASKS_UPDATE':
        return {
          ...state,
          tasks: action.tasks
        };
      default:
        return state;
    }
  };