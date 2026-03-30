from django.contrib import admin
from .models import Category, Product

# Category-ді әдемі етіп көрсету үшін
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

# Product-ті әдемі етіп көрсету үшін
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'count', 'is_active', 'category')
    list_filter = ('is_active', 'category')
    search_fields = ('name', 'description')

# Моделдерді admin-ға тіркеу
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)