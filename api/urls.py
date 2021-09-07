from django.urls import path
from .views import StudentAPI


urlpatterns = [
    path('post', StudentAPI.as_view()),
    path('post/<int:id>/', StudentAPI.as_view()),
   ]