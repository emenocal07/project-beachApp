const { Schema, model } = require("mongoose");
const beachSchema = new Schema({
  beachImg: {
    type: String,
    default:
      "https://i.pinimg.com/564x/db/ff/00/dbff0088ee5a4879cc3211e237b8f941.jpg",
  },
});
