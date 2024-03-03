const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/product")
    console.log('connected')
  }catch (err){
    console.log(err)
  }
}
        

module.exports = connectDB;

// mongoose.connect
// ('mongodb+srv://jr8o6ez:38NwDHMTu5iL52fq@products.q1nrdlk.mongodb.net/')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//     .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });
