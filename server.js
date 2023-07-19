// server.js
import express from "express";
import fetch from "node-fetch";
import { exec } from "child_process";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/proxy/:url(*)", async (req, res) => {
  try {
    const { url } = req.params;
    const response = await fetch(url);
    // const data = await response.text();
    res.sendStatus(response.status);
  } catch (error) {
    res.sendStatus(500).send("Error fetching resource");
  }

  // const { url } = req.params;
  // exec(`curl -I ${url}`, (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`Error Occurred - ${error}`);
  //     res.status(500).send("Error fetching resource");
  //   } else {
  //     const statusMatch = stdout.match(/HTTP\/\d\.\d (\d+)/);
  //     const statusCode = statusMatch ? parseInt(statusMatch[1]) : 500;
  //     res.sendStatus(statusCode.toString());
  //   }
  // });
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
