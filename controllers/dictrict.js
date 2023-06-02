const db = require("../config/db");


//Get Alldictrict
exports.getAlldictrict=(req,res)=>{
  db.query("SELECT * FROM dictrict",(error,results)=>{
    if(error){
      console.log("Error retrieving dictrict",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json(results)
  })
};

// Create new dictrict
exports.createNewDictrict=(req,res)=>{
  const {name,region_id}=req.body;
  db.query("INSERT INTO region(name,region_id) VALUES(?,?)",[name,region_id],(error,results)=>{
    if(error){
      console.log("Error creating dictrict",error);
      return res.status(500).join({error:"Internal Server Error"});
    };
    
    res.json({
      message: "Dictrict created successfully",
      dictrictId:results.insertId,
    })
  })
};

//getDictrictById
exports.getDictrictById=(req,res)=>{
  const dictrictId=req.params.id;
  db.query("SELECT * FROM dictrict WHERE id=?",[dictrictId],(error,results)=>{
    if(error){
      console.log("Error retrieving dictrict",error);
      return res.status(500).json({error: "Internal server Error"});
    }
    if(results.length === 0){
      return res.status(404).json({error: "dictrict not found"})
    }
    res.json(results[0]);
  });
};

//Update Dictrict
exports.updateDictrict=(req,res)=>{
  const {id,name,region_id}=req.body;
  db.query(
    "UPDATE region set name=?,region_id=? where id=?",[name,region_id,id],(error,results)=>{
      if(error){
        console.log("Error updated dictrict: ",error);
        return res.status(500).json({error: "Internal Server Error"});
      };
      console.log(results);
      res.json({
        message: "Dictrict updated successfully",
      });
    }
  )
};

//Delete Dictrict
exports.DeleteDictrictById = (req,res)=>{
  const dictrictId=req.params.id;
  db.query("DELETE FROM region WHERE id=?",[dictrictId],(error)=>{
    if(error){
      console.log("Error retrieving Dictrict",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json({
      message: "Dictrict deleted successfully"
    });
  });
};
