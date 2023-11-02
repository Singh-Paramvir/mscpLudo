import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {data}= req.body;
      const {token}=req.body
      console.log(token,data, "to be send to api tp");
      var config = {
        method: "post",
        url: "http://18.204.222.172:6000/api/Param/member/auth1",
        headers:{
          'Authorization': `Bearer ${token}`,
      },data
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
