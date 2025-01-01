const { fetchAll } = require("../db/basicCRUD/showall");

const getAllCoupons = async(req,res) => {
  try {
    const result = await fetchAll("allCoupons");
    result.data.forEach(val => {
      // console.log(val["partnerInfo"]);
      val["criteriaType"] = val["criteriaType"]["_path"]["segments"][1]; 
      val["partnerInfo"] = val["partnerInfo"]["_path"]["segments"][1]; 
    })
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({msg:"error"})
  }

}
module.exports = {
    getAllCoupons,
};