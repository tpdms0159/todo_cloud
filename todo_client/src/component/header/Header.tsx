import React from 'react'
import { Wrapper } from '../../CommonStyle.tsx'
import * as S from './HeaderStyle.tsx'
import useModalStore from '../../variable/useModalStore.tsx'
import useAuthStore from '../../variable/useAuthStore.tsx';

function Header() {
  const { setLoginState, setNewTodoState } = useModalStore(state=>state);
  const { token, username } = useAuthStore(state=>state);

  return (
    <S.HeaderWrapper>
        <S.LogoText>TODO</S.LogoText>
        <Wrapper padding='0.5rem'>
            <S.AddLoginButton onClick={() => setNewTodoState(true)}>+ ADD</S.AddLoginButton>
            {token ? <S.LogoText>&nbsp; &nbsp; &nbsp; {username} 님</S.LogoText>
            : <S.AddLoginButton onClick={() => setLoginState(true)}>Login / Sing Up</S.AddLoginButton>
            }
        </Wrapper>
    </S.HeaderWrapper>
  )
}

export default Header;