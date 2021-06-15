from django.http import request
from django.shortcuts import render, redirect
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

#----------------------------- Vista Zona Admin:

def admin (request):
    return render(request, 'core/admin.py')

#------------------------------ Vistas CRUD

#---- Listar productos:

def listadoprod(request):
    productos = Producto.objects.all()
    datos = {
        'productos': productos
    }
    return render(request, 'core/listadoProductos.html', datos)

#---- Agregar productos:

def add_producto(request):
    datos = {'form': ProductoForm()}
    if request.method == 'POST':
        formulario = ProductoForm(request.POST, request.FILES)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Guardado Correctamente"
            
    return render(request, 'core/add_producto.html', datos)

#---- Editar productos:

def edit_producto(request, pk):
    producto = Producto.objects.get(idProducto=pk)

    if request.method == 'POST':
        formulario_edit = ProductoForm(request.POST, request.FILES, instance=producto)
        if formulario_edit.is_valid:
            formulario_edit.save()
            return redirect(to="listadoprod")

    else:
        datos = {
            'form': ProductoForm(instance=producto) 
        }
        return render(request, 'core/edit_producto.html', datos)


#---- Eliminar productos:

def elim_producto(request, pk):
    producto = Producto.objects.get(idProducto=pk)
    producto.delete()
    return redirect(to="listadoprod")
