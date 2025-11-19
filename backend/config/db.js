import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://zubairgani:BabaDaba123@cluster0.z0hbhxi.mongodb.net/Tomato"
    )
    .then(() => console.log("DB Connected"));
};
