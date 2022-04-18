import React from "react";
import { TodoList } from "./todo-list";
import { TodoForm } from "./add-form";
import { Spinner } from "./spinner";
import { loadTasksAsync, addTasksAsync, deleteTasksAsync, changeTasksAsync } from "../api/todo.service";

export const TodoApp = () => {
  const [todoItems, setTodoItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(
    () => {
        setIsLoading(true);
        loadTasksAsync().then((items) => {
          setIsLoading(false);
          setTodoItems(items);
        });
    },
    []
  );
  const addItem = async (todoItem) => {
    setIsLoading(true);
    try {
      await addTasksAsync({ text: todoItem, isDone: false })
        .then((item) => {
          setIsLoading(false);
          setTodoItems([...todoItems, item]);
        });
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  const removeItem = async (id) => {
    setIsLoading(true);
    try {
      await deleteTasksAsync(id).then((items) => {
        setIsLoading(false);
        setTodoItems(items);
      });
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  const markTodoDone = async (id) => {
    setIsLoading(true);
    try {
      await changeTasksAsync({ id: id, isDone: true }).then((items) => {
        setIsLoading(false);
        setTodoItems(items);
      });
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  return (
    <div id="main">
      <h1>TODO List</h1>
      {isLoading ? <Spinner /> : ""}
      <TodoForm addItem={addItem} />
      <TodoList
        items={todoItems}
        removeItem={removeItem}
        markTodoDone={markTodoDone}
      />
    </div>
  );
};
