import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;

  username: string;
  setUsername: (value:string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: sessionStorage.getItem("isAuthenticated") === "true",
  token: sessionStorage.getItem("token"),
  login: (token) => {
    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("token", token);
    set({ isAuthenticated: true, token });
  },
  logout: () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("token");
    set({ isAuthenticated: false });
  },

  username: "",
  setUsername:(value: string) =>{
    set({username: value});
  }
}));

export default useAuthStore;