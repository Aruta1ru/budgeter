from django.contrib import admin

from .views import Category, Note

admin.site.register(Note)
admin.site.register(Category)
