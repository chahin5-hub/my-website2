const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// تسجيل
router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    password: hash
  });
  await user.save();
  res.send("تم التسجيل");
});

// دخول
router.post("/login", async (req, res) => {
  const user = await User.findOne({username:req.body.username});
  if(!user) return res.send("خطأ");

  const ok = await bcrypt.compare(req.body.password, user.password);
  if(!ok) return res.send("خطأ");

  res.send("تم الدخول");
});

module.exports = router;
