const express =require("express");
const router=express.Router();
const regionController=require("../controllers/region");
// const { route } = require("./region");

router.get("/",regionController.getAllRegions);

router.post("/",regionController.createNewRegion);

router.get("/:id",regionController.getregionById);

router.put("/",regionController.updateRegion);

router.delete("/:id",regionController.DeleteregionById)

module.exports=router;