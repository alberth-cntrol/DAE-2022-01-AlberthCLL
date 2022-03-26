from ast import Return
from importlib.resources import contents
from multiprocessing import context
from django.shortcuts import render
import parser
import math

# Create your views here.

def index(request):
    context = {
        'titulo':"calcula",
    }
    return render(request, 'calculadora/calcula.html', context)

def enviar(request):
    context = {
        'titulo' : "Respuesta",
        'num_1' : request.POST['num_1'],
        'num_2' : request.POST['num_2'],
        'operaciones' : request.POST['operaciones'],
        
    }
    return render(request, 'calculadora/respuesta.html', context)

def respuesta(request):
    exprecion = parser.expr(request.POST['num_1'] + request.POST['operaciones'] + request.POST['num_2']).compile()
    resultado = eval(exprecion)
    print (resultado)
    context = {
        'titulo' : 'Respuesta',
        'resultado' : resultado,
    }
    return render(request, 'calculadora/respuesta.html', context)

def formulario_tarea(request):
    return render(request, 'calculadora/calcula.html')