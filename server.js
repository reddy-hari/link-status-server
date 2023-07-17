// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/proxy/:url(*)", async (req, res) => {
  try {
    const { url } = req.params;
    const response = await fetch(url);
    // const data = await response.text();
    res.send(response.status);
  } catch (error) {
    res.status(500).send("Error fetching resource");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
