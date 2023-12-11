import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // const {data} = req.body;
      const {token}=req.body
      const {data} = req.body;
      console.log(token,data, "to be send to api tp");
      var config = {
        method: "post",
        url: "http://16.171.114.188:3000/api/admin/getAllRequests",
        headers:{
          'Authorization': `Bearer ${token}`,
      },data,
      };
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json({ data: response.data});
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
