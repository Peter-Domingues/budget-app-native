const axios = require("axios").default;

async function getBill(filter) {
  return axios({
    method: "get",
    url: `http://192.168.1.5:3000/api/bill${"?month=" + filter || ""}`,
  });
}

async function getBillByID(BillID) {
  return axios({
    method: "get",
    url: `http://localhost:3000/api/bill/${BillID}`,
  });
}

async function postBill(payload) {
  const { data } = await axios({
    method: "post",
    url: "http://192.168.1.5:3000/api/bill",
    data: payload,
  });
  return data;
}

async function editBill(id, payload) {
  const { data } = await axios({
    method: "put",
    url: `http://192.168.1.5:3000/api/bill/${id}`,
    data: payload,
  });
  return data;
}

export { getBillByID, getBill, postBill, editBill };
