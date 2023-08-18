import Movies from "models/Movies";
import connectDB from "utils/connectDB";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Can Not Connected To DB" });
  }

  if (req.method === "PATCH") {
    const id = req.query.movieId;
    const existing = req.body.existing
    try {
      const movie = await Movies.findOne({ _id: id });
      movie.existing = existing
      movie.save()
      res.status(200).json({status: "success", data: movie})
    } catch (error) {}
  }
};

export default handler;
