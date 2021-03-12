from rest_framework import routers

from .views import CategoryViewSet, NoteViewSet

router = routers.DefaultRouter()
router.register(r'notes', NoteViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = router.urls
