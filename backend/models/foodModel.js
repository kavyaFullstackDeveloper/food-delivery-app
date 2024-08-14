import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true}
},
{ 
    minimize: false, // Prevents the removal of empty objects from the schema
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
})

const foodModel = mongoose.models.food ||  mongoose.model("food", foodSchema);

export default foodModel;
