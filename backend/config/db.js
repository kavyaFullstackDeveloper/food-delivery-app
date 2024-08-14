import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kavyawhy:5ZJo6mep2gCTUtGS@cluster0.lo31ddk.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    

}