import styled from "styled-components";

export const NewTodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    width: 80%;
`

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 800;
    border: none;
    border-bottom: solid 1px black;
    text-align: start;
    padding: 0 0 1rem 0;
`
export const Label = styled.div`
    margin: 1rem 1rem 1rem 0;
    font-size: 1rem;
`

export const Input = styled.input`
    border: none;
    border-bottom: solid 2px grey;
    height: 3rem;
`

export const TextArea = styled.textarea`
    border: none;
    border-bottom: solid 2px grey;
    height: 4rem;
    resize: none;
    padding: 20px 2px;
`
