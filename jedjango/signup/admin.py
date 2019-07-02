from django.contrib import admin
from .models import Signup

# Register your models here.
# Register model in admin panel and make layout user friendly
@admin.register(Signup)
class SignupAdmin(admin.ModelAdmin):
    date_hierarchy = 'created'
    search_fields = ['name', 'email', 'birthday']
    list_display = ('name', 'email', 'birthday')

# Admin site customization
admin.site.site_header = 'Jacuzzi Entertainment Admin'
admin.site.site_title = 'Jacuzzi Entertainment Admin'
admin.site.index_title = ""