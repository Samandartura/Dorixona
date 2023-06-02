const express =require("express");
const router=express.Router();
const controller=require("../controllers/medicine");
// const { route } = require("./medicines");

router.get("/",controller.getAllMedicine);

router.post("/",controller.createNewMedicine);

router.get("/:id",controller.getmedicineById);

router.put("/",controller.updateMedicine);

router.delete("/:id",controller.DeleteMedicineById)

module.exports=router;