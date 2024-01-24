const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

const githubData = {
  login: "Surya-Thombare",
  id: 58084466,
  node_id: "MDQ6VXNlcjU4MDg0NDY2",
  avatar_url: "https://avatars.githubusercontent.com/u/58084466?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Surya-Thombare",
  html_url: "https://github.com/Surya-Thombare",
  followers_url: "https://api.github.com/users/Surya-Thombare/followers",
  following_url:
    "https://api.github.com/users/Surya-Thombare/following{/other_user}",
  gists_url: "https://api.github.com/users/Surya-Thombare/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Surya-Thombare/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/Surya-Thombare/subscriptions",
  organizations_url: "https://api.github.com/users/Surya-Thombare/orgs",
  repos_url: "https://api.github.com/users/Surya-Thombare/repos",
  events_url: "https://api.github.com/users/Surya-Thombare/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Surya-Thombare/received_events",
  type: "User",
  site_admin: false,
  name: "Suryakant Thombre",
  company: "https://github.com/Tech-Sierra",
  blog: "",
  location: "Mumbai, India",
  email: null,
  hireable: null,
  bio: "React Frontend Developer",
  twitter_username: null,
  public_repos: 40,
  public_gists: 2,
  followers: 6,
  following: 25,
  created_at: "2019-11-22T16:49:10Z",
  updated_at: "2024-01-22T04:27:06Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("suryathombare");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login first</h1>");
});

app.get("/github", (req, res) => {
  res.send(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
