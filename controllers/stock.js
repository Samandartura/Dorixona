const db = require("../config/db");


//Get AllStocks
exports.getAllStock=(req,res)=>{
  db.query("SELECT * FROM stock",(error,results)=>{
    if(error){
      console.log("Error retrieving stock",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json(results)
  })
};

// Create new stock
exports.createNewStock=(req,res)=>{
  const {medicine_id,pharmacy_id,quantity}=req.body;
  db.query("INSERT INTO region(medicine_id,pharmacy_id,quantity) VALUES(?,?,?)",[medicine_id,pharmacy_id,quantity],(error,results)=>{
    if(error){
      console.log("Error creating stock",error);
      return res.status(500).join({error:"Internal Server Error"});
    };
    console.log(results);
    res.json({
      message: "Stock created successfully",
      regionId:results.insertId,
    })
  })
};

//getStockById
exports.getStockById=(req,res)=>{
  const stockId=req.params.id;
  db.query("SELECT * FROM stock WHERE id=?",[stockId],(error,results)=>{
    if(error){
      console.log("Error retrieving stock",error);
      return res.status(500).json({error: "Internal server Error"});
    }
    if(results.length === 0){
      return res.status(404).json({error: "stock not found"})
    }
    res.json(results[0]);
  });
};

//Update stock
exports.updateStock=(req,res)=>{
  const {id,medicine_id,pharmacy_id,quantity}=req.body;
  db.query(
    "UPDATE stock set medicine_id=?,pharmacy_id=?,quantity=? where id=?",[medicine_id,pharmacy_id,quantity,id],(error,results)=>{
      if(error){
        console.log("Error updated stock: ",error);
        return res.status(500).json({error: "Internal Server Error"});
      };
      console.log(results);
      res.json({
        message: "Stock updated successfully",
      });
    }
  )
};

//Delete StockById
exports.DeleteStockById = (req,res)=>{
  const stockId=req.params.id;
  db.query("DELETE FROM stock WHERE id=?",[stockId],(error)=>{
    if(error){
      console.log("Error retrieving stock",error);
      return res.status(500).join({error:"Internal Server Error"});
    }
    res.json({
      message: "Stock deleted successfully"
    });
  });
};
