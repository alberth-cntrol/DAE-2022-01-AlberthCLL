from django.shortcuts import get_object_or_404, render
from .models import Categoria, Producto

# Create your views here.
def index(request):
    product_list = Producto.objects.order_by('nombre')[:6]
    context = {'product_list': product_list}
    return render(request,'index.html', context)

def producto(request, producto_id):
    producto = get_object_or_404(Producto, pk=producto_id)
    return render(request,'producto.html', {'producto': producto})

def categoria(request, categoria_id):
    product_list = Producto.objects.order_by('nombre').filter(categoria=categoria_id)[:6]
    context = {'product_list': product_list}
    return render(request,'categoria.html',context)