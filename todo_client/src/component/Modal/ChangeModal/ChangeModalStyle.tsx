import styled from "styled-components";

interface StateLineWrapperProps {
  onFocus?: boolean;
}
interface StateProps {
  backgroundColor?: string;
}
export const StateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;

export const StateLineWapper = styled.div<StateLineWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 60%;
  cursor: pointer;
  border-radius: 10px;

  ${({ onFocus }) => (onFocus ? "border: solid 1px black" : null)};

  &:hover {
    background-color: #b7bfc1a0;
  }
`;

export const SelectText = styled.div`
  font-size: 1.5rem;
`;

export const State = styled.p<StateProps>`
  border: none;
  border-radius: 10px;
  padding: 10px 1rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "grey"};
  line-height: 3rem;
  text-align: center;
  width: 5rem;
`;
