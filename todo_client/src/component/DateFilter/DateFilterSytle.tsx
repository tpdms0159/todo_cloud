import styled from "styled-components";

interface OneDateWrapperProps {
    selectNow? : boolean;
}
export const OneDateWrapper = styled.div<OneDateWrapperProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin: 0 10px;
    border-radius: 10px;
    border: ${({selectNow}) => (selectNow ? 'solid 1px white' : '')};
    cursor: pointer;
`

export const DateText = styled.p`
    font-size: 1rem;
    line-height: 10px;
`