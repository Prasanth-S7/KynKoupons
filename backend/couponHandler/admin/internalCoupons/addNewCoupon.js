const { addMany } = require("../../../db/basicCRUD/addmany");
const { addOne } = require("../../../db/basicCRUD/addone");
const {db , admin} = require("../../../db/connection");


const addCoupon = async(req,res) => {
    try {
        // console.log(req.body);
        const {couponType , criteriaType , offerType , offerVal , criteriaVal , partnerInfo ,total , validTill , validTillForUser } = req.body;
        const useRef1 = db.collection("criteria").doc(criteriaType);
        
        const useRef2 = db.collection("partners").doc(partnerInfo);
        // console.log("reaches")
        // console.log(useRef2)
        
        const result = await addOne({
                            couponType:couponType ,
                            criteriaType:JSON.stringify(useRef1) ,
                            criteriaVal: criteriaVal,
                            offerType: JSON.stringify(offerType),
                            offerVal: offerVal,
                            partnerInfo: useRef2,
                            totalCoupons: total,
                            },"allCoupons");
                            console.log(result)
        if(result["msg"]!="success"){
            res.status(400).json(result);
        }
        else{
            const pcid = result["id"];
            let data = [];
            for(let i=0;i<parseInt(total);i++){
                data.push({"cid":pcid , "status":"active" , "uid" : "" , 
                    "validTill" : admin.firestore.Timestamp.fromDate(new Date(validTill)),
                    "validTillForUser" : admin.firestore.Timestamp.fromDate(new Date(validTillForUser))
                })
            }
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
            console.log(data);
            const result2 = await addMany("individualCoupons",data);
            res.status(200).json(result2);   
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(400).json({msg:"error"})
      }
}
module.exports = {
    addCoupon,
};