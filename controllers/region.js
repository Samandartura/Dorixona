const db = require("../config/db");


//Get AllRegions
exports.getAllRegions=(req,res)=>{
  db.query("SELECT * FROM region",(error,results)=>{
    if(error){
      console.log("Error retrieving region",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json(results)
  })
};

// Create new region
exports.createNewRegion=(req,res)=>{
  const {id,name}=req.body;
  db.query("INSERT INTO region(id,name) VALUES(?,?)",[id,name],(error,results)=>{
    if(error){
      console.log("Error creating region",error);
      return res.status(500).join({error:"Internal Server Error"});
    };
    console.log(results);
    res.json({
      message: "region created successfully",
      regionId:results.insertId,
    })
  })
};

//getregionById
exports.getregionById=(req,res)=>{
  const regionId=req.params.id;
  db.query("SELECT * FROM region WHERE id=?",[regionId],(error,results)=>{
    if(error){
      console.log("Error retrieving region",error);
      return res.status(500).json({error: "Internal server Error"});
    }
    if(results.length === 0){
      return res.status(404).json({error: "region not found"})
    }
    res.json(results[0]);
  });
};

//Update region
exports.updateRegion=(req,res)=>{
  const {id,name}=req.body;
  db.query(
    "UPDATE region set name=? where id=?",[name,id],(error,results)=>{
      if(error){
        console.log("Error updated region: ",error);
        return res.status(500).json({error: "Internal Server Error"});
      };
      // console.log(results);
      res.json({
        message: "Region updated successfully",
      });
    }
  )
};

//Delete region
exports.DeleteregionById = (req,res)=>{
  const regionId=req.params.id;
  db.query("DELETE FROM region WHERE id=?",[regionId],(error)=>{
    if(error){
      console.log("Error retrieving region",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json({
      message: "Region deleted successfully"
    });
  });
};
