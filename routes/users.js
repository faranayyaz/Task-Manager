var express = require("express");
const multer = require("multer");
const sharp = require("sharp");
require("../src/mongo/mongod");
const auth = require("../src/middlewares/auth");
const User = require("../src/models/users");
var router = express.Router();
const bcryptjs = require("bcryptjs");

router.get("/", auth, async (req, res, next) => {
  // console.log(req.user.avatar);
  // router.get('/', auth, async (req, res, next) => {
  res.status(200).send(req.user);
});

router.post("/", async (req, res, next) => {
  const user = new User(req.body);
  try {
    const data = await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ data, token });
  } catch (error) {
    res.status(401).send({ error });
  }
});

router.patch("/updateuser", auth, async (req, res, next) => {
  try {
    const isMatch = await bcryptjs.compare(
      req.body.current_password,
      req.user.password
    );
    if (!isMatch) throw new Error("Invalid Password");
  } catch (error) {
    return res.status(400).send({ error: "Invalid Password" });
  }

  const alllowedUpdates = ["name", "email", "age", "password"];
  let updates = Object.keys(req.body);
  updates = updates.filter((update) => update != "current_password");
  const isvalidOrNot = updates.every((update) =>
    alllowedUpdates.includes(update)
  );

  if (!isvalidOrNot)
    return res.status(400).send({ error: "Invalid Operation" });

  try {
    //to force updating to follow our schema and not bypass our middleware we find and then change it here and then pass it from middele ware
    updates.forEach((update) => (req.user[update] = req.body[update]));
    const user = await req.user.save();
    const token = req.token;
    res.send({ user, token });
  } catch (error) {
    res.status(500).send(error + "");
  }
});

router.delete("/", auth, async (req, res, next) => {
  try {
    await req.user.remove();
    res.status(200).send(req.user);
  } catch (error) {
    res.status(500).send(error + "");
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.checkCradentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.status(200).send({ user, avatar: user.avatar, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((tok) => tok.token !== req.token);
    await req.user.save();
    res.status(200).send("");
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(200).send("");
  } catch (error) {
    res.status(500).send();
  }
});

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/))
      return cb(
        new Error("Please upload jpg or jpeg or png file formate only")
      );
    cb(undefined, true);
  },
});

router.post(
  "/avatar",
  auth,
  upload.single("upload"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({
        width: 250,
        height: 250,
      })
      .png()
      .toBuffer();
    req.user.avatar.data = buffer;
    req.user.avatar.contentType = "image/png";
    await req.user.save();
    res.status(200).send();
  },
  (error, req, res, next) => {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
);
router.delete("/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.status(200).send();
});

// router.get("/me/avatar", auth, async (req, res) => {
//   if (!req.user.avatar) return res.status(404).send();
//   res.send(req.user.avatar);
// });

router.get("/avatar", auth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user || !user.avatar) throw new Error();
    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});
module.exports = router;
