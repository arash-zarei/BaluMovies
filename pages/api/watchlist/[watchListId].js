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

  if (req.method === "DELETE") {
    const id = req.query.watchListId;
    try {
      await WatchList.deleteOne({ _id: id });
      res.status(200).json({ status: "success", message: "Data deleted" });
    } catch (error) {
      res
        .status(500)
        .json({ status: "failed", message: "Can Not Deleted From WatchList" });
    }
  }
};

export default handler;
