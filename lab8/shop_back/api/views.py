from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category


def products_list(request):
    products = Product.objects.all()
    data = [
        {
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category_id,
            'category_name': p.category.name,
        } for p in products
    ]
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


def product_detail(request, id):
    product = get_object_or_404(Product, pk=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category_id,
        'category_name': product.category.name,
    }
    return JsonResponse(data, json_dumps_params={'ensure_ascii': False})


def categories_list(request):
    categories = Category.objects.all()
    data = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    data = {'id': category.id, 'name': category.name}
    return JsonResponse(data)


def products_by_category(request, id):
    category = get_object_or_404(Category, pk=id)
    products = category.products.all()
    data = [
        {
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
        } for p in products
    ]
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})