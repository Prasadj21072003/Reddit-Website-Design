import { fetchingdata } from "../apis/DataFetching";

//handling pagination
const handelpagination = async (
  nextpage,
  previouspage,
  setnextpage,
  setpreviouspage,
  fetchnextdata,
  community,
  populartopic,
  setdata
) => {
  if (nextpage === true) {
    let url;
    {
      community === ""
        ? (url = `https://www.reddit.com/${populartopic}/.json?after=${fetchnextdata}&&limit=5`)
        : (url = `https://www.reddit.com/r/${community}/${populartopic}/.json?after=${fetchnextdata}&&limit=5`);
    }
    fetchingdata(url, setdata);
    setnextpage(false);
  } else if (previouspage === true) {
    let url;
    {
      community === ""
        ? (url = `https://www.reddit.com/${populartopic}/.json?before=${fetchnextdata}&&limit=5`)
        : (url = `https://www.reddit.com/r/${community}/${populartopic}/.json?before=${fetchnextdata}&&limit=5`);
    }
    fetchingdata(url, setdata);
    setpreviouspage(false);
  }
};

// Getting data based on parameters
export const makeapirequest = async ({
  setdata,
  populartopic,
  community,
  search,
  currentpage,
  fetchnextdata,
  nextpage,
  previouspage,
  setnextpage,
  setpreviouspage,
}) => {
  if (search === "") {
    if (currentpage === 1) {
      let url;
      {
        community === ""
          ? (url = `https://www.reddit.com/${populartopic}/.json?&&limit=5`)
          : (url = `https://www.reddit.com/r/${community}/${populartopic}/.json?&&limit=5`);
      }
      fetchingdata(url, setdata);
    } else {
      handelpagination(
        nextpage,
        previouspage,
        setnextpage,
        setpreviouspage,
        fetchnextdata,
        community,
        populartopic,
        setdata
      );
    }
  } else {
    //handling fetching data based on given search input
    let url = `https://www.reddit.com/search.json?limit=5&&q=${search}`;
    fetchingdata(url, setdata);
  }
};

// Changing the page
export const changepage = ({
  data,
  title,
  currentpage,
  setcurrentpage,
  setnextpage,
  setfetchnextdata,
  setpreviouspage,
}) => {
  console.log("Changing");
  if (title === "nextpage" && currentpage !== 5) {
    setnextpage(true);
    setfetchnextdata(data?.after);
    let count = currentpage + 1;
    setcurrentpage(count);
  } else if (title === "previouspage" && currentpage !== 1) {
    setpreviouspage(true);
    let count = currentpage - 1;
    setcurrentpage(count);
  }
};
