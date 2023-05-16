import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

    {
      end_year: String,
      intensity : String,
      sector: String,
      topic: String,
      insight: String,
      url: String,
      region: String,
      start_year : String,
      impact: String,
      added: String,
      published: Date,
      country : String ,
      relevance :Number ,
      pestle :String ,
      source : String,
      title :String ,
      likelihood :Number,

    },
    { timestamps: true }
  );
  
  const User = mongoose.model("User", UserSchema);
  export default User;