from . import HttpResponse

def index(request):
    return HttpResponse("api funcionando.")
