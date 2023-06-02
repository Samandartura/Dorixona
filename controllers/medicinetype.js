const db = require("../config/db");


//Get AllMenisinetype
exports.getAllMedicinetype=(req,res)=>{
  db.query("SELECT * FROM medicinetype",(error,results)=>{
    if(error){
      console.log("Error retrieving Menisinetype",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json(results)
  })
};

// Create new Menisinetype
exports.createNewMenisinetype=(req,res)=>{
  const {name}=req.body;
  db.query("INSERT INTO medicinetype(name) VALUES(?)",[name],(error,results)=>{
    if(error){
      console.log("Error creating Menisinetype",error);
      return res.status(500).join({error:"Internal Server Error"});
    };
    // console.log(results);
    res.json({
      message: "Menisinetype created successfully",
      medicinetype:results.insertId,
    })
  })
};

//getMenisinetypeById
exports.getMenisinetypeById=(req,res)=>{
  const medicinetypeId=req.params.id;
  db.query("SELECT * FROM medicinetype WHERE id=?",[medicinetypeId],(error,results)=>{
    if(error){
      console.log("Error retrieving Menisinetype",error);
      return res.status(500).json({error: "Internal server Error"});
    }
    if(results.length === 0){
      return res.status(404).json({error: "Menisinetype not found"})
    }
    res.json(results[0]);
  });
};

//Update Menisinetype
exports.updateMenisinetype=(req,res)=>{
  const {id,name}=req.body;
  db.query(
    "UPDATE medicinetype set name=? where id=?",[name,id],(error,results)=>{
      if(error){
        console.log("Error updated Menisinetype: ",error);
        return res.status(500).json({error: "Internal Server Error"});
      };
      // console.log(results);
      res.json({
        message: "Menisinetype updated successfully",
      });
    }
  )
};

//Delete Menisinetype
exports.DeleteMenisinetypeById = (req,res)=>{
  const medicinetypeId=req.params.id;
  db.query("DELETE FROM medicinetype WHERE id=?",[medicinetypeId],(error)=>{
    if(error){
      console.log("Error retrieving Menisinetype",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json({
      message: "Menisinetype deleted successfully"
    });
  });
};
