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
      "/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer/0/query?where=1%3D1&outFields=Identifica,Comunidad_,Provincia,Isla,Web_munici,Nombre,Longitud,Anchura,Grado_ocup,Paseo_mar,Nudismo,Vegetaci%C3%B3,Bandera_az,Acceso_dis,Carretera_,Autob%C3%BAs,Aparcamien,Aseos,Duchas,Zona_infan,Zona_depor,Club_na%C3%BAt,Submarinis,Zona_Surf,Observacio,Direcci%C3%B3n,Coordena_4,Coordena_5,Descripci,&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json"
    );
  }

  getPaged(page) {
    const offset = page * 18;
    const count = 18;
    return this.axiosApp.get(
      `/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer/0/query?where=1%3D1&outFields=Identifica,Comunidad_,Provincia,Isla,Web_munici,Nombre,Longitud,Anchura,Grado_ocup,Paseo_mar,Nudismo,Vegetaci%C3%B3,Bandera_az,Acceso_dis,Carretera_,Autob%C3%BAs,Aparcamien,Aseos,Duchas,Zona_infan,Zona_depor,Club_na%C3%BAt,Submarinis,Zona_Surf,Observacio,Direcci%C3%B3n,Coordena_4,Coordena_5,Descripci,&geometry=-13.960%2C35.638%2C4.893%2C41.639&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json&resultRecordCount=${count}&resultOffset=${offset}`
    );
  }

  getByNameLike(name) {
    return this.axiosApp.get(
      `/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer/0/query?where=lower(Nombre)%20like%20%27%25${name}%25%27&outFields=Identifica,Comunidad_,Provincia,Isla,Web_munici,Nombre,Longitud,Anchura,Grado_ocup,Paseo_mar,Nudismo,Vegetaci%C3%B3,Bandera_az,Acceso_dis,Carretera_,Autob%C3%BAs,Aparcamien,Aseos,Duchas,Zona_infan,Zona_depor,Club_na%C3%BAt,Submarinis,Zona_Surf,Observacio,Direcci%C3%B3n,Coordena_4,Coordena_5,Descripci,&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json`
    );
  }

  getByProvinceLike(province) {
    return this.axiosApp.get(
      `/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer/0/query?where=lower(Provincia)%20like%20%27%25${province}%25%27&outFields=Identifica,Comunidad_,Isla,Web_munici,Nombre,Longitud,Anchura,Grado_ocup,Paseo_mar,Nudismo,Vegetaci%C3%B3,Bandera_az,Acceso_dis,Carretera_,Autob%C3%BAs,Aparcamien,Aseos,Duchas,Zona_infan,Zona_depor,Club_na%C3%BAt,Submarinis,Zona_Surf,Observacio,Direcci%C3%B3n,Coordena_4,Coordena_5,Descripci,&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json`
    );
  }
};