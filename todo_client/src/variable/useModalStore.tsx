import { create } from "zustand";

interface ModalState {
    loginState: boolean;
    setLoginState: (value: boolean) => void;
    
    joinState: boolean;
    setJoinState: (value: boolean) => void;

    newTodoState: boolean;
    setNewTodoState: (value: boolean) => void;

    detailTodoState: boolean;
    setDetailTodoState: (value: boolean) => void;

}

const useModalStore = create<ModalState>((set) => ({
    loginState: sessionStorage.getItem("loginState") === 'true',
    setLoginState: (value) => {
        set({loginState: value});
        const val:string = value ? "true" : "false";
        sessionStorage.setItem("loginState", val); 
        },

    joinState: sessionStorage.getItem("joinState") === "true",
    setJoinState:(value) => {
        set({joinState: value});
        const val:string = value ? "true" : "false";
        sessionStorage.setItem("joinState", val);
    },

    newTodoState: sessionStorage.getItem("newTodoState") === "true",
    setNewTodoState: (value) => {
        set({newTodoState: value});
        const val: string = value ? "true": "false";
        sessionStorage.setItem("newTodoState", val);
    },
    
    detailTodoState: sessionStorage.getItem("detailTodoState") === "true",
    setDetailTodoState:(value:boolean) => {
        set({detailTodoState: value});
        const val: string = value ? "true" : "false";
        sessionStorage.setItem("detailTodoState", val);
    }
    

    

    }
));

export default useModalStore;