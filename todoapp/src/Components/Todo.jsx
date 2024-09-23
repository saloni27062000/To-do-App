import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedtodos = todos.filter((Todo)=>Todo.done).length
  const totaltodos = todos.length
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedtodos={completedtodos} totaltodos={totaltodos}/>
    </div>
  );
}
