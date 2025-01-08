import { create } from "zustand";

const Store = create((set) => ({
  data: [],
  setdata: (data) => set({ data: data }),
  populartopic: "hot",
  setpopulartopic: (data) => set({ populartopic: data }),
  community: "technology",
  setcommunity: (data) => set({ community: data }),
  navlink: "popular",
  setnavlink: (data) => set({ navlink: data }),
  search: "",
  setsearch: (data) => set({ search: data }),
  before: "",
  setbefore: (data) => set({ before: data }),
  after: "",
  setafter: (data) => set({ after: data }),
  currentpage: 1,
  setcurrentpage: (data) => set({ currentpage: data }),
  nextpage: false,
  setnextpage: (data) => set({ nextpage: data }),
  previouspage: false,
  setpreviouspage: (data) => set({ previouspage: data }),
  dropdown: false,
  setdropdown: (data) => set({ dropdown: data }),
}));

export default Store;
