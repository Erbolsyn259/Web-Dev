from django.urls import path
from api.views.fbv import products_list,product_detail
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
]
#lvl fbv
#urlpatterns = [
#    path('products/',products_list),
#    path('products/<int:product_id>/',product_detail),
#]
