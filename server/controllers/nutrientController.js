const Nutrient = require("../models/Nutrient");

const axios = require("axios");

exports.searchFood = async (req, res) => {

  try {

    const { food } = req.body;

    if (!food) {

      return res.status(400).json({
        message: "Food name is required",
      });
    }

    const response = await axios.get(

      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&api_key=${process.env.USDA_API_KEY}`

    );

    if (
      !response.data.foods ||
      response.data.foods.length === 0
    ) {

      return res.status(404).json({
        message: "Food not found",
      });
    }

    const foodData = response.data.foods[0];

    const nutrients = {};

    foodData.foodNutrients.forEach((item) => {

      nutrients[item.nutrientName] = item.value;
    });

    const result = {

      calories:
        nutrients["Energy"] || 0,

      protein:
        nutrients["Protein"] || 0,

      fat:
        nutrients["Total lipid (fat)"] || 0,

      carbs:
        nutrients["Carbohydrate, by difference"] || 0,

      fiber:
        nutrients["Fiber, total dietary"] || 0,

      sugar:
        nutrients["Sugars, total including NLEA"] || 0,

      sodium:
        nutrients["Sodium, Na"] || 0,

      potassium:
        nutrients["Potassium, K"] || 0,

      iron:
        nutrients["Iron, Fe"] || 0,

      zinc:
        nutrients["Zinc, Zn"] || 0,
    };

    const saveData = new Nutrient({

      userId: req.user.id,

      foodName: food,

      nutrients: result,
    });

    await saveData.save();

    res.status(200).json(result);

  } catch (err) {

    console.log(
      err.response?.data || err.message
    );

    res.status(500).json({
      message: "Food fetch failed",
    });
  }
};

exports.getHistory = async (req, res) => {

  try {

    const history = await Nutrient.find({

      userId: req.user.id,

    }).sort({
      createdAt: -1,
    });

    res.status(200).json(history);

  } catch (err) {

    console.log(err.message);

    res.status(500).json({
      message: "Error fetching history",
    });
  }
};

