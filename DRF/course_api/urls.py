from django.urls import path
from .views import CourseList, CourseDetail

app_name = 'course_api'

urlpatterns = [
   # path('<slug:slug>/', CourseDetail.as_view(), name='course_detail'),
    path('<int:id>/', CourseDetail.as_view(), name='course_detail'),
    path('', CourseList.as_view(), name='course_list'),
    
]