from django.urls import path

from . import views

app_name = 'calculadora'

urlpatterns = [
    path('',views.index, name='index'),
    path('enviar', views.enviar, name='enviar'),

    path('calcula', views.calcula, name='calcula'),
    path('respuesta', views.respuesta, name='respuesta'),
]