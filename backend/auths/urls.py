from django.urls import path
from .views import UserCreate, UserProfileUpdate, ChangePasswordView, RequestPasswordResetView, ResetPasswordView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register', UserCreate.as_view(), name='register'),
    path('profile', UserProfileUpdate.as_view(), name='update'),
    path('login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('change-password', ChangePasswordView.as_view(), name='change-password'),
    path('request-password-reset', RequestPasswordResetView.as_view(), name='request-password-reset'),
    path('reset-password', ResetPasswordView.as_view(), name='reset-password'),
]
