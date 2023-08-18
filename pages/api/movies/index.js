import Movies from "models/Movies";
import connectDB from "utils/connectDB";
import moviesData from "utils/data";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Can Not Connected To DB" });
  }

  try {
    const moviesDB = await Movies.find();
    if (moviesDB.length >= 25) return;
    const movies = await Movies.create(moviesData);
    res
      .status(201)
      .json({ status: "success", message: "Data created", data: movies });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Error in storing data in DB",
    });
  }
};

export default handler;
