const express = require("express");
const router = express.Router();

//Import region
const regionRoutes=require("./region");

//Import stock
const stockRoutes=require("./stock");

//Import dictrict
const dictrictRoutes=require("./dictrict");


//Import dictrict
const pharmaciesRoutes=require("./pharmacies");


//Import medicinetype
const medicinetypeRoutes=require("./medicinetype");

//Import medicine
const medicinesRoutes=require("./medicines");

router.use("/region",regionRoutes);
router.use("/stock",stockRoutes);
router.use("/dictrict",dictrictRoutes);
router.use("/pharmacies",pharmaciesRoutes);
router.use("/medicinetype",medicinetypeRoutes);
router.use("/medicines",medicinesRoutes);





module.exports=router;