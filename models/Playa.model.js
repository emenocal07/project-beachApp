const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const playaSchema = new Schema(
    {
        Nombre: String,
        Provincia: String,
        Comunidad_: String,
        Descripci: String,
        Coordena_4: Number,
        Coordena_5: Number,
        Condicione: String,
        Nudismo: Boolean,
        Zona_Surf: Boolean,
        Bandera_az: Boolean,
        Duchas: Boolean,
        Dirección: String,
        Zona_infan: Boolean,
        Carretera_: String,
        Autobús_t: String,
    },
    {
        timestamps: true,
    }
);
const Playa = mongoose.model("Playa", playaSchema);

module.exports = Playa;