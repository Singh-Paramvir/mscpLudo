import axios from "axios";
// import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  // const session = await getSession({req})
  if (req.method === "POST") {
    try {
      const {token}= req.body;
      const data = req.body;
      console.log(data, "to be send to api tp");
      var config = {
        method: "post",
        url: "http://16.171.114.188:3000/api/admin/gameslote",
        headers: {
            'Authorization': `Bearer ${token}`
          },
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
