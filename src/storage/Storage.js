import { create } from "zustand";

const Storage = create((set) => ({
  data: [],
  setdata: (data) => set({ data: data }),
  populartopic: "hot",
  setpopulartopic: (data) => set({ populartopic: data }),
  community: "",
  setcommunity: (data) => set({ community: data }),
  navlink: "popular",
  setnavlink: (data) => set({ navlink: data }),
  search: "",
  setsearch: (data) => set({ search: data }),
  fetchnextdata: "",
  setfetchnextdata: (data) => set({ fetchnextdata: data }),
  currentpage: 1,
  setcurrentpage: (data) => set({ currentpage: data }),
  nextpage: false,
  setnextpage: (data) => set({ nextpage: data }),
  previouspage: false,
  setpreviouspage: (data) => set({ previouspage: data }),
  dropdown: false,
  setdropdown: (data) => set({ dropdown: data }),
  loader: false,
  setloader: (data) => set({ loader: data }),
}));

export default Storage;
