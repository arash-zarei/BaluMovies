import WatchList from "models/WatchList";
import connectDB from "utils/connectDB";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Can Not Connected To DB" });
  }

  if (req.method === "POST") {
    const data = req.body;
    try {
      const watchList = await WatchList.create({ watchlist: data });
      res.status(200).json({ statsu: "success", data: watchList });
    } catch (error) {
      res
        .status(500)
        .json({ status: "failed", message: "Can Not Added To WatchList" });
    }
  }
};

export default handler;
