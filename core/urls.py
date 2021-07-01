from django.urls import path
from .views import principal, contacto, perifericos, funkos, consolas, iniciosesion, juegos, detalles, registro, anime, ghibli, listadoprod, admin, add_producto, edit_producto, elim_producto

urlpatterns = [
    path('', principal, name="principal"),
    path('contacto/', contacto, name="contacto"),
    path('perifericos/', perifericos, name="perifericos"),
    path('funkos/', funkos, name="funkos"),
    path('consolas/', consolas, name="consolas"),
    path('iniciosesion/', iniciosesion, name="iniciosesion"),
    path('juegos/', juegos, name="juegos"),
    path('detalles/', detalles, name="detalles"),
    path('registro/', registro, name="registro"),
    path('anime/', anime, name="anime"),
    path('ghibli/', ghibli, name="ghibli"),
    path('listadoproductos/', listadoprod, name="listadoprod"),
    path('admin/', admin, name="admin"),
    path('agregar-producto/', add_producto, name="add-producto"),
    path('editar-producto/<pk>/', edit_producto, name="edit-producto"),
    path('eliminar-producto/<pk>/', elim_producto, name="elim-producto")
]