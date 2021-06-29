from django.urls import path
from api_FrikiTime.views import productos, producto
from .viewsLogin import login

urlpatterns = [
    path('productos/', productos, name='productos'),
    path('producto/<pk>', producto, name='producto'),
    path('login/', login, name='login'),
]