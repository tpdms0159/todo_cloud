import useModalStore from "../../variable/useModalStore.tsx";

export const AfterCloseModal = () => {
  console.log("After close modal functino");
  const { modalClose, setModalClose } = useModalStore((state) => state);

  setModalClose(!modalClose);
};
