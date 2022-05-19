from rest_framework.views import APIView
from rest_framework.response import Response

from.models import Producto
from.serializers import ProductoSerializer

class ProductoView(APIView):
    
    def get(self,request):
        data = Producto.objects.all()
        ser = ProductoSerializer(data,many=True)
        return Response(ser.data)
