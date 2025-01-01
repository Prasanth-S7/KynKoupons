const { fetchone } = require("../../db/basicCRUD/showoneormany");
const { db } = require("../../db/connection");

const getCouponsOfUser = async(req,res) => { 
  try {
    const {userId} = req.body;
    const useRef = db.collection("user").doc(userId);
    const result = await fetchone("individualCoupons","userId",useRef,"==");
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({msg:"error"})
  }
};

module.exports = {
    getCouponsOfUser,
};