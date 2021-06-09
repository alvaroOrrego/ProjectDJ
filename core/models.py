from django.db import models

# Create your models here.

#Modelo para categorías:

class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key =True, verbose_name = 'Id de categoría')
    nombreCategoria = models.CharField(max_length = 50, verbose_name = 'Nombre de la categoría')

    def __str__(self):
        return self.nombreCategoria

#Modelo para productos:

class Producto(models.Model):
    idProducto = models.IntegerField(primary_key =True, verbose_name = 'Id de Producto')
    nombreProducto = models.CharField(max_length = 100, verbose_name = 'Nombre del producto')
    descripcionProducto = models.CharField(max_length = 200, verbose_name = 'Descripción del producto')
    imgProducto = models.ImageField(upload_to = 'media', blank = True, null = True, verbose_name = 'Imagen del producto')
    precioProducto = models.IntegerField(verbose_name = 'Precio del producto')
    categoria = models.ForeignKey(Categoria, on_delete = models.CASCADE)

    def __str__(self):
        return self.nombreProducto

    