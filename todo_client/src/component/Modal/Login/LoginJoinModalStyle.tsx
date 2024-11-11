import styled from "styled-components";
import ReactModal from "react-modal";

export const MyReactModal = (ReactModal.defaultStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
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
    height: " 70%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    // padding: "2rem",
    // boxShadow: "10px 10px 10px 10px white",
  },
});
