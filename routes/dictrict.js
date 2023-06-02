const express =require("express");
const router=express.Router();
const dictrictController=require("../controllers/dictrict");
// const { route } = require("./dictrict");

router.get("/",dictrictController.getAlldictrict);

router.post("/",dictrictController.createNewDictrict);

router.get("/:id",dictrictController.getDictrictById);

router.put("/",dictrictController.updateDictrict);

router.delete("/:id",dictrictController.DeleteDictrictById)

module.exports=router;