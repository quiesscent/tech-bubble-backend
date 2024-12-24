from rest_framework.permissions import BasePermission

class IsOwnerOrAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        # Allow admins
        if request.user and request.user.is_staff:
            return True

        # Allow users to access/update their own data
        return obj == request.user
