import { create } from "zustand";
import axios from "../api";
export const useUserStore = create((set, get) => ({
  userData: {},
  fetchUser: async (header) => {
    if (header) {
      axios.defaults.headers = header;
    }
    const { data } = await axios.get("/myself");
    set({ userData: data });
  },
  signKey: {
    Key: "keybook",
    Sign: "d860ca17ca7a2f20fc6173df987d7b4e",
  },

  setSignKey: (state) => {
    set({ signKey: state });
  },
  //get book list
  booklist: {},
  setBooklist: async (header) => {
    const signKey = get().signKey;
    if (signKey) {
      axios.defaults.headers = signKey;
    }
    const { data } = await axios.get("/books");
    set({ booklist: data });
  },
  ///Add book
  addbook: {},
  signKey: {
    Key: "keybook",
    Sign: "2703b128f0a0fb8e4892c757acd21252",
  },
  setAddBook: async (isbn) => {
    const signKey = get().signKey;
    if (signKey) {
      axios.defaults.headers = signKey;
    }

    const { data } = await axios.post("/books", {
      isbn: isbn,
    });

    set({ addbook: data });
  },
  //Delete book

  setDelete: async (id) => {
    const signKey = get().signKey;
    if (signKey) {
      axios.defaults.headers = signKey;
    }
    const {} = await axios.delete(`/books/${id}`);
  },
  /// edit book
  editBook: async (edit) => {
    const signKey = get().signKey;
    if (signKey) {
      axios.defaults.headers = signKey;
    }
    const { data } = await axios.patch(`/books/${edit?.id}`, {
      status: edit.status,
    });

    set({ addbook: data });
  },
  /// Search book
}));
