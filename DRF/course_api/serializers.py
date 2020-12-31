from rest_framework import serializers
from course.models import Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('course_id', 'course_name', 'teaching_assistant',
                  'course_hours', 'credit_hours', 'calender_reference',
                  'end_date')
    # lookup_field = 'slug'
    # extra_kwargs = {
    #     'url': {'lookup_field': 'slug'}
    # }              