const express = require("express");
const app = express();
const PORT = 8000;
const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const urlRoute = require("./routes/url");

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongo db Connected")
);

app.use(express.json());
app.use("/url", urlRoute);

app.use("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => {
  console.log(`server started ar port:${PORT}`);
});
