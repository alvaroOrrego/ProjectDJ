from django.urls import path
from .views import principal, contacto, perifericos, funkos, consolas, login, juegos, detalles


urlpatterns = [
    path('', principal, name="principal"),
    path('contacto/', contacto, name="contacto"),
    path('perifericos/', perifericos, name="perifericos"),
    path('funkos/', funkos, name="funkos"),
    path('consolas/', consolas, name="consolas"),
    path('login/', login, name="login"),
    path('juegos/', juegos, name="juegos"),
    path('detalles/', detalles, name="detalles")
]