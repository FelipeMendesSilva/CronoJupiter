let now = new Date()

const initialState = {
    _date: {dia:(now.getDate()),mes:((now.getMonth()+1)),ano:(now.getFullYear())}
    
  };
  
  export const dateReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DATE_UPDATE':
        return {
          ...state,
          _date: action._date
        };
      default:
        return state;
    }
  };