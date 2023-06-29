const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const User = require("./models/userModel");
const Link = require("./models/linkModel");
const bcrypt = require("bcryptjs");
const generateToken = require("./config/generateToken");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api working!!");
});

app.post("/signup", async (req, res) => {
  const { name, email, password, pic } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedpassword = bcrypt.hashSync(password, salt);
  const user = await User.create({
    name: name,
    email: email,
    password: hashedpassword,
    pic: pic,
  });

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(),
    });
  } else {
    res.send("Failed");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  const success = await bcrypt.compare(password, user.password);
  if (user && success) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ detail: "Incorrect password" });
  }
});

app.post("/link/add", async (req, res) => {
  const { email } = req.body;
  const { title, url } = req.body;
  const link = await Link.create({
    email: email,
    title: title,
    url: url,
  });

  if (link) {
    res.json({
      _id: link._id,
      email: link.email,
      title: link.title,
      url: link.url,
    });
  } else res.status(400).json({ detail: "not successful" });
});

app.post("/links", async (req, res) => {
  const { email } = req.body;
  const links = await Link.find({ email: email });
  if (links) {
    res.status(201).json({
      links,
    });
  }
});

app.listen(PORT, console.log(`Server listening on ${PORT}`));
