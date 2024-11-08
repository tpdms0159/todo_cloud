import styled from "styled-components";
interface SubBoxProps {
    backgroundColor? : string;
}

export const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 2rem;

    border-radius: 20px;
    border: solid 1px white;
    background-color: white;
    color: black;
`

export const Title = styled.div`
    padding: 0 10px;
    width: 100%;
    font-size: 1rem;
    border-bottom: solid 1px black;
`

export const SubBox = styled.div<SubBoxProps>`
width: min-content;
    padding: 10px;
    font-size: 1rem;
    background-color: ${({backgroundColor}) => (backgroundColor ? backgroundColor: rgba(249, 0, 4, 0.5))};
    color: black;
    border-radius: 20px;
    margin: 1rem 0;
    font-weight: 300;

`