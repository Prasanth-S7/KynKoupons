const {db , admin} = require("../connection");

async function addOne(data,collection) {
  console.log("this is the data i get - ",data);
    try {
      const docRef = await db.collection(collection).add(data);
      return {msg:"success",id:docRef.id}
    } catch (error) {
      console.error("Error adding document:", error);
      return {msg:"error"}
    }
  }
module.exports = {addOne};
