const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema(
    {
        name: String,
        lastName: String,
        profileImg: {
            type: String,
            default: "https://i.stack.imgur.com/l60Hf.png",
        },
        favourites: {         //NO SABEMOS BIEN COMO AGREGAR ESTO
            type: [String],
        },
        country: String
    },
    {
        timestamps: true,
    }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;