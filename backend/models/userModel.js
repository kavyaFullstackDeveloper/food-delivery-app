import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { 
    minimize: false, // Prevents the removal of empty objects from the schema
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
