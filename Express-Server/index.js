const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extends: false }));

//Rest api
app.get("/api/users", (req, res) => {
  res.send(users);
});

//condition base

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.send(user);
  })
  .patch((req, post) => {
    //edit user with id
  })
  .delete((req, res) => {
    //delete user with id
  });

app.get("/api/users", (req, res) => {
  return res.send(users);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length + 1 });
  });
});

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
