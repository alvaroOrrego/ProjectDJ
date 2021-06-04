from django.urls import path
from .views import principal, contacto, perifericos, funkos,consolas


urlpatterns = [
    path('', principal, name="principal"),
    path('contacto/', contacto, name="contacto"),
    path('perifericos/', perifericos, name="perifericos"),
    path('funkos/', funkos, name="funkos"),
    path('consolas/', consolas, name="consolas")
]