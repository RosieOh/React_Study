import styled, {css} from "styled-components";

export const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

export const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    // Component Selector : TodoItemBlock 위에 커서가 있을 때, Remove 컴포넌트를 보여주라는 의미
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

export const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    ${props => 
        props.done &&
        css`
            border: 1px solid #38d9a9;
    `}
`;

export const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => 
        props.done &&
        css`
            color: #ced4da;
    `}
`;