const axios = require("axios").default;

async function getIncoming(month) {
  return axios({
    method: "get",
    url: `http://192.168.1.5:3000/api/incoming${"?month=" + month || ""}`,
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
    url: "http://192.168.1.5:3000/api/incoming",
    data: payload,
  });
  return data;
}

async function editIncoming(id, payload) {
  const { data } = await axios({
    method: "put",
    url: `http://192.168.1.5:3000/api/incoming/${id}`,
    data: payload,
  });
  return data;
}

async function deleteIncoming(id) {
  const { data } = await axios({
    method: "delete",
    url: `http://192.168.1.5:3000/api/incoming/${id}`,
  });
  return data;
}

export {
  getIncomingByID,
  getIncoming,
  postIncoming,
  editIncoming,
  deleteIncoming,
};
