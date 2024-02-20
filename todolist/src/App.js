import React from "react";
import { GlobalStyle } from "./style/globalStyle";
import TodoTemplate from "./components/template/TodoTemplate";
import TodoHead from "./components/todo/TodoHead";
import TodoList from "./components/list/TodoList";
import TodoItem from "./components/item/TodoItem";


function App() {
  return(
    <>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoItem />
      </TodoTemplate>
    </>
  );
}
 

export default App;
