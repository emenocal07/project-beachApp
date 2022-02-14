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
      required: [true, "Indica el email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Indica la contraseña"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profile: [ // HEMOS INTENTADO RELACIONARLA CON EL USER MODEL PERO NO FUNCIONA
      {
        type: Schema.Types.ObjectId,
        ref: "Profile",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
