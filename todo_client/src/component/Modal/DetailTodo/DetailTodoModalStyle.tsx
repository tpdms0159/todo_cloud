import styled from "styled-components";

interface InfoBoxProps {
  backgroundColor?: string;
}
export const TitleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding: 0 10px;
  border: none;
  border-bottom: solid 1px black;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 12rem;
`;

export const InfoBox = styled.div<InfoBoxProps>`
  border-radius: 10px;
  min-width: 2.5rem;
  height: 2rem;
  padding: 5px 10px;
  line-height: 2rem;
  font-size: 1rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "rgba(249, 0, 4, 0.5)"};
`;
export const TextWrapper = styled.textarea`
  text-align: start;
  width: 80%;
  padding: 20px 0;
  min-height: 50%;
  border: none;
`;
export const Button = styled.button`
  border-radius: 10px;
  font-weight: 800;
  border: solid 1px black;
  padding: 1rem;
  background-color: white;
  width: 45%;
`;
