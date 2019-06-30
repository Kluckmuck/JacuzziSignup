from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from signup.models import Signup
from signup.serializers import SignupSerializer

# Create your views here.
@csrf_exempt #TODO: REMOVE THIS
def signup_list(request):
    """
    List all code signups, or create a new snippet.
    """
    if request.method == 'GET':
        signups = Signup.objects.all()
        serializer = SignupSerializer(signups, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SignupSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
