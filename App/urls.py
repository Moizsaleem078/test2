from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [

    path('',views.indexpage,name='mainscreen'),
    path('/form',views.formpage,name='formpage'),
    path('/form2',views.formpage2,name='formpage2'),
     path('/about',views.About,name='aboutpage'),
]
