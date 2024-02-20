import React from "react";
import * as S from "./styled.jsx";


function TodoTemplate( { children } ) {
    return <S.TodoTemplateBlock>{children}</S.TodoTemplateBlock>;
}

export default TodoTemplate;

