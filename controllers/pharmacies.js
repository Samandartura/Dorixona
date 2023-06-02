const db = require("../config/db");


//Get AllPharmacies
exports.getAllPharmacies=(req,res)=>{
  db.query("SELECT * FROM pharmacies",(error,results)=>{
    if(error){
      console.log("Error ",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json(results)
  })
};

// Create new Pharmacies
exports.createNewDictrict=(req,res)=>{
  const {name,adress,location,phone,email,region_id,dictrict_id}=req.body;
  db.query("INSERT INTO pharmacies(name,adress,location,phone,email,region_id,dictrict_id) VALUES(?,?,?,?,?,?,?)",[name,adress,location,phone,email,region_id,dictrict_id],(error,results)=>{
    if(error){
      console.log("Error creating pharmacies",error);
      return res.status(500).join({error:"Internal Server Error"});
    };
    console.log(results);
    res.json({
      message: "Pharmacies created successfully",
      pharmacyId:results.insertId,
    })
  })
};

//getDictrictById
exports.getPharmacyById=(req,res)=>{
  const pharmacyId=req.params.id;
  db.query("SELECT * FROM pharmacies WHERE id=?",[pharmacyId],(error,results)=>{
    if(error){
      console.log("Error retrieving pharmacies",error);
      return res.status(500).json({error: "Internal server Error"});
    }
    if(results.length === 0){
      return res.status(404).json({error: "pharmacies not found"})
    }
    res.json(results[0]);
  });
};

//Update Pharmacy
exports.updatePharmacies=(req,res)=>{
  const {id,name,adress,location,phone,email,region_id,dictrict_id}=req.body;
  db.query(
    "UPDATE pharmacies set name=?,adress=?,location=?,phone=?,email=?,region_id=?,dictrict_id=? where id=?",[name,adress,location,phone,email,region_id,dictrict_id,id],(error,results)=>{
      if(error){
        console.log("Error updated dictrict: ",error);
        return res.status(500).json({error: "Internal Server Error"});
      };
      // console.log(results);
      res.json({
        message: "Pharmacies updated successfully",
      });
    }
  )
};

//Delete Pharmacies
exports.DeletePharmaciesById = (req,res)=>{
  const pharmacyId=req.params.id;
  db.query("DELETE FROM pharmacies WHERE id=?",[pharmacyId],(error)=>{
    if(error){
      console.log("Error retrieving pharmacies",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json({
      message: "pharmacies deleted successfully"
    });
  });
};

