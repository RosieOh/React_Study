import React from "react";
import { MdDone, MdDelete} from "react-icons/md";
import * as S from "./styled.jsx";

function TodoItem({ id, done, text }) {
    
    return (
        <S.TodoItemBlock>
            <S.CheckCircle done={done}>{done && <MdDone />}</S.CheckCircle>
            <S.Text done={done}>{text}</S.Text>
            <S.Remove>
                <MdDelete/>
            </S.Remove>
        </S.TodoItemBlock>
    );
}

export default TodoItem;