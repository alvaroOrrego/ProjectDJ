from django.shortcuts import render
from .serializers import ProductoSerializer
from core.models import Producto
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
#from django.views.decorators.csrf import csrf_exempt

@api_view(['POST', 'GET'])
#@csrf_exempt

def productos(request):

    if request.method =='GET':
        """
        GET: Listar productos
        """
        productos_lista = Producto.objects.all()
        serializer = ProductoSerializer(productos_lista, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        """
        POST: Agregar un producto
        """
        data = JSONParser().parse(request)
        serializer = ProductoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])

def producto(request, pk):
    try:
        producto = Producto.objects.get(idProducto=pk)
    except Producto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    """
    GET: Mostrar detalle de un producto según id
    """
    if request.method == 'GET':
        serializer = ProductoSerializer(producto)
        return Response(serializer.data)

    elif request.method == 'PUT':

        """
        PUT: Editar un producto por id
        """
        data = JSONParser().parse(request)
        serializer = ProductoSerializer(producto, data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':

        """
        DELETE: Borrar un producto por id
        """
        producto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)
