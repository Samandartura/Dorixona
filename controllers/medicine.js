const db = require("../config/db");


//Get AllMedicines
exports.getAllMedicine=(req,res)=>{
  db.query("SELECT * FROM medicines",(error,results)=>{
    if(error){
      console.log("Error retrieving Medicines",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json(results)
  })
};

// Create new Medicine
exports.createNewMedicine=(req,res)=>{
  const {id,name,manufacture,medicine_type,price,expiry_date,info}=req.body;
  db.query("INSERT INTO medicines(name,manufacture,medicine_type,price,expiry_date,info) VALUES(?,?,?,?,?,?)",[name,manufacture,medicine_type,price,expiry_date,info],(error,results)=>{
    if(error){
      console.log("Error creating Medicine",error);
      return res.status(500).join({error:"Internal Server Error"});
    };
    console.log(results);
    res.json({
      message: "Medicine created successfully",
      MedicineId:results.insertId,
    })
  })
};

//getMedicineById
exports.getmedicineById=(req,res)=>{
  const MedicineId=req.params.id;
  db.query("SELECT * FROM medicines WHERE id=?",[MedicineId],(error,results)=>{
    if(error){
      console.log("Error retrieving Medicine",error);
      return res.status(500).json({error: "Internal server Error"});
    }
    if(results.length === 0){
      return res.status(404).json({error: "Medicine not found"})
    }
    res.json(results[0]);
  });
};

//Update Medicine
exports.updateMedicine=(req,res)=>{
  const {id,name,manufacture,medicine_type,price,expiry_date,info}=req.body;
  db.query(
    "UPDATE medicines set name=?,manufacture=?,medicine_type=?,price=?,expiry_date=?,info=? where id=?",[name,manufacture,medicine_type,price,expiry_date,info,id],(error,results)=>{
      if(error){
        console.log("Error updated Medicine: ",error);
        return res.status(500).json({error: "Internal Server Error"});
      };
      // console.log(results);
      res.json({
        message: "Medicine updated successfully",
      });
    }
  )
};

//Delete Medicine
exports.DeleteMedicineById = (req,res)=>{
  const MedicineId=req.params.id;
  db.query("DELETE FROM medicines WHERE id=?",[MedicineId],(error)=>{
    if(error){
      console.log("Error retrieving Medicine",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json({
      message: "Medicine deleted successfully"
    });
  });
};
