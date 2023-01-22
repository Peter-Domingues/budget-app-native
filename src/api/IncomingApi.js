const axios = require("axios").default;

async function getIncoming(filter) {
  return axios({
    method: "get",
    url: `http://192.168.1.35:3000/api/incoming${"?month=" + filter || ""}`,
  });
}

async function getIncomingByID(IncomingID) {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/incoming/${IncomingID}`,
  });
}

async function postIncoming(payload) {
  const { data } = await axios({
    method: "post",
    url: "http://192.168.1.35:3000/api/incoming",
    data: payload,
  });
  return data;
}

async function editIncoming(id, payload) {
  const { data } = await axios({
    method: "put",
    url: `http://192.168.1.35:3000/api/incoming/${id}`,
    data: payload,
  });
  return data;
}

export { getIncomingByID, getIncoming, postIncoming, editIncoming };
