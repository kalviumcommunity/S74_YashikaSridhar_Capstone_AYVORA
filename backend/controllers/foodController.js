import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// ✅ NEW: Update Food
const updateFood = async (req, res) => {
    try {
        const foodId = req.params.id;

        const updatedData = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
        };

        if (req.file) {
            updatedData.image = req.file.filename;
        }

        const updatedFood = await foodModel.findByIdAndUpdate(foodId, updatedData, { new: true });

        res.json({ success: true, message: "Food updated", data: updatedFood });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating food" });
    }
};

export { addFood, listFood, removeFood, updateFood };
