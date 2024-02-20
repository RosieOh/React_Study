import styled, {css} from "styled-components";

export const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border: none;
    border-radius: 50%;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in; 
    // 0.125s : 애니메이션의 지속시간
    // all : 애니메이션의 효과가 모든 css 속성에 적용된다는 것을 의미
    // ease-in : 애니메이션의 가속도를 나타냄. 여기서는 빠르게 시작하여 서서히 감소되는 'ease-in' 함수 적용
    ${props =>
        props.open && 
        css`
            background: #ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;

export const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;
