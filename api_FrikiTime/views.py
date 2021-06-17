from django.shortcuts import render
from .serializers import ProductoSerializer
from core.models import Producto
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
#from django.views.decorators.csrf import csrf_exempt

@api_view(['GET', 'POST'])
#@csrf_exempt

def productos(request):
    """
    Lista todos los productos
    """
    if request.method =='GET':
        productos_lista = Producto.objects.all()
        serializer = ProductoSerializer(productos_lista, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        """
        Agrega un producto
        """
        data = JSONParser().parse(request)
        serializer = ProductoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)