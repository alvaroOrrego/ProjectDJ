from django.urls import path
from api_FrikiTime.views import productos

urlpatterns = [
    path('producto/', productos, name='productos'),
]