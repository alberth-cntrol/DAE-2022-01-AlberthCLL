from multiprocessing.spawn import import_main_path
from django.contrib import admin


from.models import Categoria
from.models import Producto

admin.site.register(Categoria)
admin.site.register(Producto)
# Register your models here.
