const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    username: {
      minlength: [5, "El nombre de usuario debe tener mínimo 5 caracteres"],
      type: String,
      trim: true,
      required: [true, "Indica el nombre de usuario"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Indica el email."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    favBeaches: [
      {
        type: Schema.Types.ObjectId,
        ref: "Beach",
      },
    ],
    profile: {
      name: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        default: "https://i.stack.imgur.com/l60Hf.png",
      },
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("User", userSchema);
