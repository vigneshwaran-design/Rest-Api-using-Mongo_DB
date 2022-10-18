import mongoose from "mongoose";

const goalschema = mongoose.Schema(
  {
    text: {
      type: "string",
      required: [true, "please add a text value"],
    },
  },
  {
    timestamp: true,
  }
);

const goal = mongoose.model("Goal", goalschema);
export default goal;
