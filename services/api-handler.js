const axios = require("axios");

module.exports = class APIHandler {
  constructor() {
    this.axiosApp = axios.create({
      baseURL: "https://services1.arcgis.com",
      // "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer/0/query?where=1%3D1&outFields=Identifica,Comunidad_,Provincia,Isla,Web_munici,Nombre,Longitud,Anchura,Grado_ocup,Paseo_mar,Nudismo,Vegetaci%C3%B3,Bandera_az,Acceso_dis,Carretera_,Autob%C3%BAs,Aparcamien,Aseos,Duchas,Zona_infan,Zona_depor,Club_na%C3%BAt,Submarinis,Zona_Surf,Observacio,Direcci%C3%B3n,Coordena_4,Coordena_5,Descripci,&geometry=-13.960%2C35.638%2C4.893%2C41.639&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json",
    });
  }

  getFullList() {
    return this.axiosApp.get(
      "/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer/0/query?where=1%3D1&outFields=Identifica,Comunidad_,Provincia,Isla,Web_munici,Nombre,Longitud,Anchura,Grado_ocup,Paseo_mar,Nudismo,Vegetaci%C3%B3,Bandera_az,Acceso_dis,Carretera_,Autob%C3%BAs,Aparcamien,Aseos,Duchas,Zona_infan,Zona_depor,Club_na%C3%BAt,Submarinis,Zona_Surf,Observacio,Direcci%C3%B3n,Coordena_4,Coordena_5,Descripci,&geometry=-13.960%2C35.638%2C4.893%2C41.639&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json"
    );
  }

  getOneRegister(playa_id) {
    return this.axiosApp.get(`/playa/${playa_id}`);
  }
};
