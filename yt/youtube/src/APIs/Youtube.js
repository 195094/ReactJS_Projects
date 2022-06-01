import axios from "axios";
const KEY = "AIzaSyACyVHxHuo7xS7T58Elczrvhqt6k-JT2mY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
