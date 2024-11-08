import React from 'react'
import { Wrapper } from '../../CommonStyle.tsx'
import * as S from './HeaderStyle.tsx'

function Header() {
  return (
    <S.HeaderWrapper>
        <S.LogoText>TODO</S.LogoText>
        <Wrapper padding='0.5rem'>
            <S.AddLoginButton>+ ADD</S.AddLoginButton>
            <S.AddLoginButton>Login / Sing Up</S.AddLoginButton>
        </Wrapper>
    </S.HeaderWrapper>
  )
}

export default Header;