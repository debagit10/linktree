const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "josiah", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
