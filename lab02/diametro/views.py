from ast import Return
from importlib.resources import contents
from multiprocessing import context
from django.shortcuts import render
import parser
import math
# Create your views here.

def index(request):
    context = {
        'titulo':"Cálculo del volumen de un cilindro",
    }
    return render(request, 'volumenc/formulario_cilindro.html', context)

def fcilindro_respuesta(request):
    exprecion = parser.expr("((" + request.POST['num_2'] + "/2)*2)" + request.POST['num_1']).compile()
    resultado = float(eval(exprecion)) * math.radians(180)

    context = {
        'titulo' : 'Respuesta',
        'resultado' : resultado,
    }
    return render(request, 'volumenc/fcilindro_respuesta.html', context)

def formulario_cilindro(request):
    return render(request, 'volumenc/formulario_cilindro.html')