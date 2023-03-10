const axios = require("axios").default;

async function getHistory() {
  return axios({
    method: "get",
    url: `http://192.168.1.5:3000/api/history`,
  });
}
async function getSpecificHistory(month, year) {
  return axios({
    method: "get",
    url: `http://192.168.1.5:3000/api/history${"?month=" + month || ""}${
      "&year=" + year || ""
    }`,
  });
}

export { getHistory, getSpecificHistory };
