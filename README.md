# 🏖️ Beach locator

This project's aim is to provide a searcher of all beaches all over the Spanish country filtering by name or location and giving information of each beach. Take a look at it: https://tortuga-beach-locator.herokuapp.com/

## Screenshots
![tortuga-screenshot](https://user-images.githubusercontent.com/95500908/159769583-a99d632d-c720-4b8f-8cb3-4a054833b52c.jpg)
![tortuga-screenshot2](https://user-images.githubusercontent.com/95500908/159769596-d2e629f0-e882-41f9-81ce-c1a9ca7adaa7.jpg)

### technologies
Js, Css, Handlebars, Express, MongoDB, Postman

#### Endpoints
| HTTP Method | URI path            | Description      |      Protected |
| :---         |   :---:            |          ---:    |           ---: |
| GET          | /                  | Render index page and search   |          |
| POST         | /                  | Handle index page and search   |          |
| GET          | /registro          | Render register page   |    |
| POST         | /registro          | Handle register page   |    |
| GET          | /login             | Login page                          |    |
| POST         | /login             | Handle login   |    |
| GET          | /listado | Full beaches list   |    |
| GET          | /playa/:playa_id   | Details of one result and map and reviews   |    |
| POST         |/playa/:playa_id    | Comments for registered users only  |    |
| GET          | /playa/:playa_id/comentar   | Render comments form for registered users only   |  Yes  |
| POST         | /playa/:playa_id/comentar   | Handle comments form for registered users only   |  Yes  |
| POST         | /playa/:playa_id/:comentario_id/borrar   | Delete comment   | Yes   |
| GET          | /usuarios  | List of all registered users   | Yes   |
| POST         | /usuarios  | Handle of all registered users   | Yes   |



