import axios from "axios";

export default async function handler(req, res) {

  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log(data,"Hello");

      let response = await axios.post("http://16.171.114.188:3000/api/admin/updateWithdrawActive", data);
      const request = response.data;
      console.log(request,"to check");
      res.status(200).json({ data: request });
    } catch (err) {
      console.log(err);
      res.status(403).json({ error: err });
    }
  }
}








