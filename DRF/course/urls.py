from django.urls import path
from django.views.generic import TemplateView

app_name = 'course'

urlpatterns = [
    path('', TemplateView.as_view(template_name='course/index.html')),
]
