import React from "react";
import ReactModal from "react-modal";
import useModalStore from "../../../variable/useModalStore.tsx";
import { MyReactModal } from "../Login/LoginJoinModalStyle.tsx";
import {
  Button,
  InfoBox,
  InfoWrapper,
  TextWrapper,
  Title,
  TitleButtonWrapper,
} from "./DetailTodoModalStyle.tsx";
import { SubBox } from "../../TodoArea/TodoBox/TodoBoxStyle.tsx";

function DetailTodoModal() {
  const { detailTodoState, setDetailTodoState } = useModalStore(
    (state) => state
  );

  const clickSave = () => {};

  const clickDelete = () => {};

  return (
    <ReactModal
      isOpen={detailTodoState}
      style={MyReactModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setDetailTodoState(false)}
    >
      {/* title */}

      <TitleButtonWrapper>
        <Title>title</Title>
        <InfoWrapper>
          <InfoBox>done</InfoBox>
          <InfoBox>~2024.10.01</InfoBox>
        </InfoWrapper>
      </TitleButtonWrapper>
      {/* text */}
      <TextWrapper>texts</TextWrapper>

      {/* upate, delete 버튼 */}
      <TitleButtonWrapper>
        <Button>SAVE</Button>
        <Button>DELETE</Button>
      </TitleButtonWrapper>
    </ReactModal>
  );
}

export default DetailTodoModal;
