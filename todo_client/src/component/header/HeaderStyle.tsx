import styled from "styled-components";


export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;

    border-bottom: solid 1px white;
    box-shadow: 0 0 10px 0 black;

`
export const LogoText = styled.p`
    font-size: 1rem;
    color: white;
`

export const AddLoginButton = styled.button`
    font-size: 0.8rem;
    padding: 0 10px;
    border-radius: 10px;
    margin: 0 0 0 1rem;
    box-shadow: 0 0 10px 0 #95F4FF;
    background-color: #95F4FF;
    cursor: pointer;
`