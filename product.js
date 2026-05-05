const router = require("express").Router();
const Product = require("../models/Product");

// إضافة منتج
router.post("/", async (req,res)=>{
  const p = new Product(req.body);
  await p.save();
  res.send("تمت الإضافة");
});

// عرض المنتجات
router.get("/", async (req,res)=>{
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
