import { create } from "zustand";

interface NowTodo {
  id: string | null;
  setId: (value: string) => void;
  title: string | null;
  setTitle: (value: string) => void;
  text: string | null;
  setText: (value: string) => void;
  state: string | null;
  setState: (value: string) => void;
  deadline: string | null;
  setDeadline: (value: string) => void;
}

const useNowTodo = create<NowTodo>((set) => ({
  id: sessionStorage.getItem("id"),
  setId: (value) => {
    set({ id: value });
    sessionStorage.setItem("id", value);
  },

  title: sessionStorage.getItem("title"),
  setTitle: (value) => {
    set({ title: value });
    sessionStorage.setItem("title", value);
  },

  text: sessionStorage.getItem("text"),
  setText: (value) => {
    set({ text: value });
    sessionStorage.setItem("text", value);
  },

  state: sessionStorage.getItem("state"),
  setState: (value) => {
    set({ state: value });
    sessionStorage.setItem("state", value);
  },

  deadline: sessionStorage.getItem("deadline"),
  setDeadline: (value) => {
    set({ deadline: value });
    sessionStorage.setItem("deadline", value);
  },
}));

export default useNowTodo;
