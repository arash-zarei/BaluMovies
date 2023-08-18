import { Schema, models, model } from "mongoose";

const WatchListSchema = new Schema({
  watchlist: [],
});

const WatchList = models.WatchList || model("WatchList", WatchListSchema);

export default WatchList;
