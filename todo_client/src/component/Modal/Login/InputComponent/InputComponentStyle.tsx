import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 80%;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
`
export const Label = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;

export const InputText = styled.input`
  width: 70%;
  border: none;
  border-bottom: solid 2px grey;
  background-color: none;
`;

export const Button = styled.div`
  border-radius: 10px;
  padding: 0.5rem;
  width: 50%;
  border: solid 1px black;
  text-align: center;
  margin-top: 2rem;
  cursor: pointer;
`;
