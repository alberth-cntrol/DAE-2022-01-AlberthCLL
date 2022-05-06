from django.urls import path

from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('series',views.SeriesView.as_view(),name='series'),
    path('serie/<int:serie_id>',views.SerieDetailView.as_view())
]
