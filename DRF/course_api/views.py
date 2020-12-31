#from django.shortcuts import render
from rest_framework import generics
from course.models import Course
from .serializers import CourseSerializer


# Create your views here.
class CourseList(generics.ListCreateAPIView):
    """
    docstring
    """
    queryset =  Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    # lookup_field = 'slug'
    lookup_field = 'id'
