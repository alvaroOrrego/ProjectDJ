from django.urls import path
from api_FrikiTime.views import productos, producto

urlpatterns = [
    path('productos/', productos, name='productos'),
    path('producto/<pk>', producto, name='producto'),

]