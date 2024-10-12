const User = require("../model/user");

// get all user
async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

// delete user by id
async function handleDeleteUser(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.send({ status: "Success" });
}

// get user by id
async function handleUserById(req, res) {
  const user = await User.findById(req.params.id);
  res.json(user);
}

//handle update existing user
async function handleUpdateUser(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, {
    lastName: "Changed",
  });
  res.json(user);
}

//handle create/post user
async function handleCreateUser(req, res) {
  const body = req.body;
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("result", result);
  return res.json({ status: "success", result });
}

//display data on screen
async function handleDisplayData(req, res) {
  const allDbUsers = await User.find({});
  const html = `<ul>${allDbUsers.map(
    (user) =>
      `<li>
        ${user.firstName} - ${user.email}
      </li>`
  )}</ul>`;
  res.send(html);
}

module.exports = {
  handleGetAllUsers,
  handleUserById,
  handleDeleteUser,
  handleUpdateUser,
  handleCreateUser,
  handleDisplayData,
};
