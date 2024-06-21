const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);

require("./dbConnectivity/dbConnection");
//update admin refresh attempt 2
app.use(
  cors({
    allowedHeaders: ["Content-Type", "token", "authorization"],
    exposedHeaders: ["token", "authorization"],
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
  })
);
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ extended: true, limit: "1000mb" }));

// app.use("/api/v1", require("./routers/indexRouter"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log("server is running on port :", PORT);
  // console.log("Environment",global.gConfig);
});
