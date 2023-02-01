const axios = require("axios").default;

async function getIncomingHistory() {
  return axios({
    method: "get",
    url: `http://192.168.1.5:3000/api/incoming/history`,
  });
}
async function getSpendingHistory() {
  return axios({
    method: "get",
    url: `http://192.168.1.5:3000/api/spending/history`,
  });
}

export { getIncomingHistory, getSpendingHistory };
