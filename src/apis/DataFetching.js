import axios from "axios";

// fetching data
export const fetchingdata = async (url, setdata) => {
  try {
    const resp = await axios.get(url);
    setdata(resp?.data?.data);
  } catch (error) {
    console.log(error);
  }
};
