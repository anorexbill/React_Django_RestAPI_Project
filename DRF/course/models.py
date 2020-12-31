from django.db import models
# from django.template.defaultfilters import slugify
# from django.urls import reverse

# Create your models here.
class Course(models.Model):
    course_id = models.CharField(max_length=10)
    course_name = models.CharField(max_length=30)
    teaching_assistant = models.CharField(max_length=30)
    course_hours = models.IntegerField()
    credit_hours = models.IntegerField()
    calender_reference = models.URLField()
    end_date = models.DateField()
    # slug = models.SlugField(null=False, unique=True)

    # def get_absolute_url(self):
    #     return reverse('course_detail', kwargs={'slug': self.slug})

    # def save(self, *args, **kwargs): # new
    #     if not self.slug:
    #         self.slug = slugify(self.course_id)
    #     return super().save(*args, **kwargs)    

    # def __str__(self):
    #     return course_id + ' ' + course_name
