const initialState = {user : 'Felipe'}
  
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_UPDATE':
        return {
          ...state,
          user: action.user
        };
      default:
        return state;
    }
  }