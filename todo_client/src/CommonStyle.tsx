import styled from "styled-components";

interface WrapperProps {
    padding? : string,
    flexDirection? : string,
    justifyContent? : string

}

// flex, flex-direction, justify-content 설정 기본 스타일
export const Wrapper = styled.div<WrapperProps>`
    padding: ${({padding}) => (padding ? padding : '2rem')};
    display: flex;
    flex-direction: ${({flexDirection}) => (flexDirection ? flexDirection : 'row')};
    justify-content: ${({justifyContent}) => (justifyContent ? justifyContent : 'space-between')};
    color: white;
`