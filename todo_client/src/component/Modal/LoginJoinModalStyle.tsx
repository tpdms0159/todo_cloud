import styled from "styled-components";
import ReactModal from "react-modal";

export const MyReactModal = (ReactModal.defaultStyles = {
  overlay: {
    backgroundColor: "grey",
    width: "100%",
    height: "100%",
    zIndex: "10",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // overflow: "hidden",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "50%",
    height: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    // padding: "2rem",
    boxShadow: "10px 10px 10px 10px white",
  },
});

export const Button = styled.div`
  border-radius: 10px;
  padding: 1rem;
  width: 50%;
  border: solid 1px black;
  text-align: center;
  margin-top: 2rem;
`;
