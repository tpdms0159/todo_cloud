import React, { useState } from "react";
import { Wrapper } from "../../../../CommonStyle.tsx";
import {
  InputText,
  InputWrapper,
  Label,
  Title,
  Button,
} from "./InputComponentStyle.tsx";
import PostLoginApi from "../../../../API/PostLoginApi.tsx";
import PostJoinApi from "../../../../API/PostJoinApi.tsx";
import useAuthStore from "../../../../variable/useAuthStore.tsx";
import useModalStore from "../../../../variable/useModalStore.tsx";

interface InputComponentProps {
  loginOrJoin?: string;
}

function InputComponent({ loginOrJoin }: InputComponentProps) {
  const { login, setUsername } = useAuthStore((state) => state);
  const { setLoginState, setJoinState } = useModalStore((state) => state);
  const labels =
    loginOrJoin == "login"
      ? ["username", "password"]
      : ["username", "password", "role"];

  const [Info, setInfo] = useState({ username: "", password: "", role: "" });

  const Onchage = (label, data) => {
    if (label == "username") {
      setInfo({ ...Info, username: data });
    } else if (label == "password") {
      setInfo({ ...Info, password: data });
    } else if (label == "role") {
      setInfo({ ...Info, role: data });
    }
  };

  const OnLogin = async () => {
    PostLoginApi(Info.username, Info.password)
      .then((res) => {
        const myToken = res.headers["authorization"].split(" ");
        login(myToken[1]);
        setUsername(Info.username);
        setLoginState(false);
      })
      .catch((err) => console.log(err));
  };

  const OnJoin = async () => {
    if (loginOrJoin === "login") {
      setJoinState(true);
      return;
    }
    const result = PostJoinApi(Info.username, Info.password);

    if ((await result) === "join success") {
      setJoinState(false);
    } else {
      console.log(result);
    }
  };

  return (
    <InputWrapper>
      <Title>{loginOrJoin == "login" ? "LOGIN" : "JOIN"}</Title>
      {labels.map((data, ind) => {
        return (
          <Wrapper key={ind} style={{ alignItems: "center" }}>
            <Label>{data}</Label>
            <InputText
              onChange={(e) => Onchage(data, e.target.value)}
              type={data == "password" ? "password" : ""}
            />
          </Wrapper>
        );
      })}
      <InputWrapper style={{ alignItems: "center", width: "100%" }}>
        {loginOrJoin == "login" ? (
          <Button onClick={OnLogin}>LOGIN</Button>
        ) : null}

        <Button onClick={OnJoin}>SIGN UP</Button>
      </InputWrapper>
    </InputWrapper>
  );
}

export default InputComponent;
