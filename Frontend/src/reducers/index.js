import { userReducer } from './userReducer';
import { dateReducer } from './dateReducer';
import { tasksReducer} from './tasksReducer';
import { idtasksReducer} from './idtasksReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  userState: userReducer,
  dateState: dateReducer,
  tasksState: tasksReducer,
  idtasksState: idtasksReducer});