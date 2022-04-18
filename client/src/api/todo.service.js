import { axiosGet, axiosErrors, axiosPost, axiosPut, axiosDelete } from './axios';

export const loadTasksAsync = () => {
  const todos = axiosGet(`todos`);
  return todos()
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw axiosErrors(e);
    });
};

export const addTasksAsync = (tsk) => {
  const todos = axiosPost(`todos`, {tsk});
  return todos()
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw axiosErrors(e);
    });
};

export const changeTasksAsync = (tsk) => {
  const todos = axiosPut(`todos/${tsk.id}`, {tsk});
  return todos()
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw axiosErrors(e);
    });
};

export const deleteTasksAsync = (id) => {
  const todos = axiosDelete(`todos/${id}`);
  return todos()
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw axiosErrors(e);
    });
};