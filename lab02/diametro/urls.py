from django.urls import path

from . import views

app_name = 'cilindro'

urlpatterns = [
    path('',views.index, name='index'),
    path('cilindro', views.formulario_cilindro, name='cilindro'),
    path('respuesat', views.fcilindro_respuesta, name='respuesta'),
]