from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('test_token/', views.test_token, name='test_token'),
    path('watchlist/', views.watchlist, name='watchlist'),
    path('watchlist/<int:series_id>/', views.watchlist_delete, name='watchlist_delete'),
    
]
