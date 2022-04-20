import { axiosGet, axiosErrors, axiosPost, axiosPut, axiosDelete } from './axios';

export const loadTasksAsync = () => {
  const todos = axiosGet(`todo`);
  return todos()
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw axiosErrors(e);
    });
};

export const addTasksAsync = (tsk) => {
  const todos = axiosPost(`todo`);
  return todos(tsk)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => {
      throw axiosErrors(e);
    });
};

export const changeTasksAsync = (tsk) => {
  const todos = axiosPut(`todo/${tsk.id}`);
  return todos(tsk)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => {
      throw axiosErrors(e);
    });
};

export const deleteTasksAsync = (id) => {
  const todos = axiosDelete(`todo/${id}`);
  return todos()
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => {
      throw axiosErrors(e);
    });
};