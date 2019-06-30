from rest_framework import serializers
from signup.models import Signup


class SignupSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(
        required=True, allow_blank=False, max_length=100)
    birthday = serializers.DateField(required=True)
    email = serializers.CharField(
        required=True, allow_blank=False, max_length=100)
    
    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Signup.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.name = validated_data.get('name', instance.name)
        instance.birthday = validated_data.get('birthday', instance.birthday)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance
