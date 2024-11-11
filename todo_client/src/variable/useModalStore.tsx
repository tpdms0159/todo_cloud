import { create } from "zustand";

interface ModalState {
    loginState: boolean;
    setLoginState: (value: boolean) => void;
    
    // joinState: boolean;
    // setJoinState: (value: boolean) => void;
    // newTodoState: boolean;
    // detailTodoState: boolean;

}

const useModalStore = create<ModalState>((set) => ({
    loginState: sessionStorage.getItem("loginState") === 'true',
    setLoginState: (value) => {
        const val:string = value ? "true" : "false";
        sessionStorage.setItem("loginState", val);
    }
    

    

    }
));

export default useModalStore;