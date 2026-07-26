fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};
if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    repo1: repository(name: "learnenglishforme") {
      name
      description
      forkCount
      stargazers {
        totalCount
      }
      url
      id
      diskUsage
      primaryLanguage {
        name
        color
      }
    }
    repo2: repository(name: "LTDD_DoAn") {
      name
      description
      forkCount
      stargazers {
        totalCount
      }
      url
      id
      diskUsage
      primaryLanguage {
        name
        color
      }
    }
    repo3: repository(name: "CloStore") {
      name
      description
      forkCount
      stargazers {
        totalCount
      }
      url
      id
      diskUsage
      primaryLanguage {
        name
        color
      }
    }
    repo4: repository(name: "ApiChatBox") {
      name
      description
      forkCount
      stargazers {
        totalCount
      }
      url
      id
      diskUsage
      primaryLanguage {
        name
        color
      }
    }
  }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(default_options, res => {
    let responseData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", d => {
      responseData += d;
    });
    res.on("end", () => {
      let parsed = JSON.parse(responseData);
      if (parsed.data && parsed.data.user) {
        let user = parsed.data.user;
        let edges = [];
        if (user.repo1) edges.push({ node: user.repo1 });
        if (user.repo2) edges.push({ node: user.repo2 });
        if (user.repo3) edges.push({ node: user.repo3 });
        if (user.repo4) edges.push({ node: user.repo4 });
        
        delete user.repo1;
        delete user.repo2;
        delete user.repo3;
        delete user.repo4;
        
        user.pinnedItems = {
          totalCount: edges.length,
          edges: edges
        };
      }
      fs.writeFile("./public/profile.json", JSON.stringify(parsed), function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.write(data);
  req.end();
}

if (MEDIUM_USERNAME !== undefined) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestMediumFailed);
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.end();
}
