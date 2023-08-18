import { Schema, models, model } from "mongoose";

const moviesSchema = new Schema({
  fullname: String,
  en_name: String,
  fa_name: String,
  genre: String,
  year_score: [],
  country: String,
  director: String,
  actors: String,
  time: String,
  synopsis: String,
  description: String,
  img: Number,
  existing: Boolean,
});

const Movies = models.Movies || model("Movies", moviesSchema);

export default Movies;
