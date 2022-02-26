# Beach locator

This project's aim is to provide a searcher of all beaches all over the Spanish country filtering by name or location and giving information of each beach.

## Endpoints
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



