// api/proxy.js

const https = require("https");

export default (req, res) => {
  const url = "https://course-api.com/react-store-products";

  https
    .get(url, (resp) => {
      let data = "";

      // A chunk of data has been received.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, OPTIONS"
        );
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.status(200).json(JSON.parse(data));
      });
    })
    .on("error", (err) => {
      res.status(500).json({ error: err.message });
    });
};