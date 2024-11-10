import React from "react";
import { Wrapper } from "../../../CommonStyle.tsx";
import { InputText, InputWrapper, Label } from "./InputComponentStyle.tsx";

interface InputComponentProps {
  loginOrJoin?: string;
}

function InputComponent({ loginOrJoin }: InputComponentProps) {
  const labels =
    loginOrJoin == "login"
      ? ["username", "password"]
      : ["username", "password", "role"];

  return (
    <InputWrapper>
      Lgoin
      {labels.map((data, ind) => {
        return (
          <Wrapper>
            <Label>{data}</Label>
            <InputText />
          </Wrapper>
        );
      })}
    </InputWrapper>
  );
}

export default InputComponent;
