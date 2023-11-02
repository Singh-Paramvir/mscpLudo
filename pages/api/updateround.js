import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      // Filter out properties with null, undefined, or empty string values
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value !== null && value !== undefined && value !== "")
      );

      console.log(filteredData, "to be sent to the API!!!!");

      var config = {
        method: "post",
        url: "http://159.89.168.224:3000/api/admin/updateslote",
        data: filteredData, // Send the filtered data
      };

      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json({ data: response.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
