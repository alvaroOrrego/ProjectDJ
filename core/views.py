from django.shortcuts import render
from .models import Producto
from .forms import ProductoForm

# Create your views here.

#Vistas de cada ventana del sitio web

def principal(request):
    return render (request, 'core/PaginaPrincipal.html')

def contacto(request):
    return render(request, 'core/Contacto.html')

def perifericos(request):
    return render(request, 'core/PaginaPerifericosDet.html')

def funkos(request):
    return render(request, 'core/PaginaFunkosDet.html')

def consolas(request):
    return render(request, 'core/PaginaConsolasDet.html')

def login (request):
    return render(request, 'core/Login.html')

def juegos (request):
    return render(request, 'core/PaginaJuegosDet.html')

def detalles (request):
    return render(request, 'core/PaginaDetalles.html')

def registro (request):
    return render(request, 'core/Registro.html')

def anime (request):
    return render(request, 'core/apiAnime.html')

def ghibli (request):
    return render(request, 'core/apiGhibli.html')

#-----------------------------------------------------------------------------------------

#--------------------- Vista Zona Admin:

def admin (request):
    return render(request, 'core/admin.py')

#------------------------------ Vistas CRUD

#---- Listado de Productos:

def listadoprod(request):
    productos = Producto.objects.all()
    datos = {
        'productos': productos
    }
    return render(request, 'core/listadoProductos.html', datos)