import axios from "axios";

const fetchingdata = async (url, setdata) => {
  try {
    const resp = await axios.get(url);
    setdata(resp?.data?.data);
    console.log(resp?.data?.data);
  } catch (error) {
    console.log(error);
  }
};

const handelpagination = async (
  nextpage,
  previouspage,
  setnextpage,
  setpreviouspage,
  after,
  community,
  populartopic,
  setdata
) => {
  if (nextpage === true) {
    let url = `https://www.reddit.com/r/${community}/${populartopic}/.json?after=${after}&&limit=5`;
    console.log(after);
    fetchingdata(url, setdata);
    setnextpage(false);
  } else if (previouspage === true) {
    let url = `https://www.reddit.com/r/${community}/${populartopic}/.json?before=${after}&&limit=5`;

    fetchingdata(url, setdata);
    setpreviouspage(false);
  }
};

export const getdata = async ({
  setdata,
  populartopic,
  community,
  search,
  currentpage,
  after,
  nextpage,
  previouspage,
  setnextpage,
  setpreviouspage,
}) => {
  if (search === "") {
    //handeling fetching data
    if (currentpage === 1) {
      let url = `https://www.reddit.com/r/${community}/${populartopic}/.json?&&limit=5`;
      fetchingdata(url, setdata);
    } else {
      handelpagination(
        nextpage,
        previouspage,
        setnextpage,
        setpreviouspage,
        after,
        community,
        populartopic,
        setdata
      );
    }
  } else {
    //handeling fetching data based on given search input
    let url = `https://www.reddit.com/search.json?limit=5&&q=${search}`;
    fetchingdata(url, setdata);
    handelpagination(
      nextpage,
      previouspage,
      setnextpage,
      setpreviouspage,
      after,
      community,
      populartopic,
      setdata
    );
  }
};
