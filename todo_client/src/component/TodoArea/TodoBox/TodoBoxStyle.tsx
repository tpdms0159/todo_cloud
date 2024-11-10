import styled from "styled-components";
interface SubBoxProps {
  backgroundColor?: string;
}

interface TitleProps {
  justifyContent?: string;
  border?: boolean;
}

export const TodoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 2rem;

  border-radius: 20px;
  border: solid 1px white;
  background-color: white;
  color: black;

  width: 100%;
`;
export const StateCircle = styled.div`
  height: 10px;
  width: 10px;
  background-color: green;
  border-radius: 50px;
  margin-right: 10px;
  padding: 2px;
`;
export const Title = styled.div<TitleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  padding: 5px 0;
  width: 100%;
  font-size: 1rem;
  border-bottom: ${({ border }) => (border ? "" : "solid 1px black")};
`;

export const SubBox = styled.div<SubBoxProps>`
  width: min-content;
  padding: 10px;
  font-size: 1rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "rgba(249, 0, 4, 0.5)"};
  color: black;
  border-radius: 20px;
  margin: 10px 0;
  font-weight: 300;
`;
