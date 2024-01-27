import mongoose from "mongoose";

const EcommerceSchema = new mongoose.Schema({}, { timestamps: true });

export const Ecommerce = mongoose.model("Ecommerce", EcommerceSchema);
