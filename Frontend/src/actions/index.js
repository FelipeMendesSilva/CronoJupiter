export const userAction = value => ({
  type: 'USER_UPDATE',
  user: value
});

export const dateAction = value => ({
  type: 'DATE_UPDATE',
  _date: value
});

export const tasksAction = value => ({
  type: 'TASKS_UPDATE',
  tasks: value
});

export const idtasksAction = value => ({
  type: 'IDTASKS_UPDATE',
  idtasks: value
});



export default (userAction, dateAction, tasksAction, idtasksAction)