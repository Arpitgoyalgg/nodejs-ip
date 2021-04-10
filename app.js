const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const RequestIp = require("@supercharge/request-ip");

const expressMiddleware = function (req, res, next) {
  req.ip = RequestIp.getClientIp(req);
  next();
};

app.use(expressMiddleware);

app.get("/", (req, res) => {
  res.send(req.ip);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
