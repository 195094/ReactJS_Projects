import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID awcoQuGAZH_lykFewt_McyZ7n6V4nQd9EJ9zdaC5kwM",
  },
});
