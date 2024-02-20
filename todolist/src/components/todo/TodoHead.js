import React from "react";
import * as S from "./styled.jsx";

function TodoHead() {
    return (
      <S.TodoHead>
        <h1>2019년 7월 10일</h1>
        <div className="day">수요일</div>
        <div className="tasks-left">할 일 2개 남음</div>
      </S.TodoHead>
    );
  }

export default TodoHead;