import React from "react";
import * as S from "./styled.jsx";
import TodoItem from "../item/TodoItem.js";

function TodoList() {
    return (
        <S.TodoListBlock>
            <TodoItem text="프로젝트 생성하기" done={true}/>
            <TodoItem text="컴포넌트 스타일링 하기" done={true} />
            <TodoItem text="Context 만들기" done={false} />
            <TodoItem text="기능 구현하기" done={false} />
        </S.TodoListBlock>
    )
}

export default TodoList;