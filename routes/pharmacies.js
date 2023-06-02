const express =require("express");
const router=express.Router();
const pharmaciesController=require("../controllers/pharmacies");
// const { route } = require("./pharmacies");

router.get("/",pharmaciesController.getAllPharmacies);

router.post("/",pharmaciesController.createNewDictrict);

router.get("/:id",pharmaciesController.getPharmacyById);

router.put("/",pharmaciesController.updatePharmacies);

router.delete("/:id",pharmaciesController.DeletePharmaciesById)

module.exports=router;