from django.shortcuts import render
from .models import Student
from .serializers import StudentSerializer
from rest_framework import mixins
from rest_framework import generics
# Create your views here.
class StudentAPI(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()
    
    lookup_field = 'id'

    def get(sef,request, id=None):
        if id:
            return sef.retrieve(request)
        else:
            return sef.list(request)