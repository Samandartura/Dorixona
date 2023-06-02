const express =require("express");
const router=express.Router();
const stockController=require("../controllers/stock");
// const { route } = require("./stock");

router.get("/",stockController.getAllStock);

router.post("/",stockController.createNewStock);

router.get("/:id",stockController.getStockById);

router.put("/",stockController.updateStock);

router.delete("/:id",stockController.DeleteStockById)

module.exports=router;