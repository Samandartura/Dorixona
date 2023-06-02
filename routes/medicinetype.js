const express =require("express");
const router=express.Router();
const controller=require("../controllers/medicinetype");
const { route } = require("./region");

router.get("/",controller.getAllMedicinetype);

router.post("/",controller.createNewMenisinetype);

router.get("/:id",controller.getMenisinetypeById);

router.put("/",controller.updateMenisinetype);

router.delete("/:id",controller.DeleteMenisinetypeById)

module.exports=router;