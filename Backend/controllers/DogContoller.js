const Dog = require("../models/Dogs");

// Get all dogs
const getAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json({
      success: true,
      dogs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message || "Error in getting all dogs",
    });
  }
};

// Post a dog
const postDog = async (req, res) => {
  const { name, age, breed, email, phone, imageUrl } = req.body;

  try {
    const newDog = new Dog({
      name,
      age,
      breed,
      email,
      phone,
      imageUrl,
    });

    await newDog.save();
    res.json({
      success: true,
      dog: newDog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message || "Error in posting a dog",
    });
  }
};

module.exports = { getAllDogs, postDog };
