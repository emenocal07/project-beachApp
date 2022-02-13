# Buscador de playas

This project's aim is to provide a searcher of all beaches all over the Spanish country filtering if each beach is mainly for dogs, surfing, etc.

## Endpoints
| HTTP Method | URI path            | Description      |      Protected |
| :---         |   :---:            |          ---:    |           ---: |
| GET          | /                  | Render index page and search   |          |
| POST         | /                  | Handle index page and search   |          |
| GET          | /registro          | Render register page   |    |
| POST         | /registro          | Handle register page   |    |
| GET          | /login             | Login page                          |    |
| POST         | /login             | Handle login   |    |
| GET          | /buscar/resultados | Search results   |    |
| GET          | /playa/:playa_id   | Details of one result and map and reviews   |    |
| POST         |/playa/:playa_id    | Comments for registered users only  |    |
| GET          | /playa/:playa_id/comentar   | Render comments form for registered users only   |  Yes  |
| POST         | /playa/:playa_id/comentar   | Handle comments form for registered users only   |  Yes  |
| POST         | /playa/:playa_id/:comentario_id/borrar   | Delete comment   | Yes   |
| GET          | /playa/crear  | Render create page form   |  Yes  |
| POST         | /playa/crear    | Handle create page form   |  Yes  |
| GET          | /playa/:playa_id/editar   | Render  edit page form   | Yes   |
| POST         | /playa/:playa_id/editar    | Handle edit page form   |  Yes  |
| POST         | /playa/:playa_id/borrar   | Handle delete button   |  Yes  |
| GET          | /usuarios  | List of all registered users   | Yes   |
| POST         | /usuarios  | Handle of all registered users   | Yes   |
| GET          |/usuarios/:usuario_id/favoritos   | List of user's favorite beaches   |  Yes  |
| POST         |/usuarios/:usuario_id/favoritos   | Handle user's favorite beaches   |  Yes  |
| GET          | /usuarios/:usuario_id/comentarios   | List of user's favorite comments   | Yes   |
| POST         | /usuarios/:usuario_id/comentarios   | Handle user's favorite comments   | Yes   |
| GET          | /playas/contacto   | Render contact form   |    |
| POST         | /playas/contacto    | Handle contact form   |    |
