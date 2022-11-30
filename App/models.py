from django.db import models

class mainscreen(models.Model):
    main_title=models.CharField(max_length=500,blank=True,null=True)
    video_link=models.URLField(max_length=300, default='#')
    depression_test_text=models.CharField(max_length=500,blank=True,null=True)
    anxiety_test_text=models.CharField(max_length=500,blank=True,null=True)
    depression_main_title=models.CharField(max_length=500,blank=True,null=True)
    depression_main_description=models.CharField(max_length=500,blank=True,null=True)

class depression_articles(models.Model):
  
    article_image=models.ImageField(upload_to='static/images')
    article_heading=models.CharField(max_length=500,blank=True,null=True)
    article_description=models.CharField(max_length=500,blank=True,null=True)
    article_link=models.URLField(max_length=300, default='#')

class formdata(models.Model):
    education=models.CharField(max_length=500,blank=True,null=True)
    city=models.CharField(max_length=500,blank=True,null=True)
    gender=models.CharField(max_length=500,blank=True,null=True)
    survey_teken_before=models.CharField(max_length=500,blank=True,null=True)
    comment=models.CharField(max_length=500,blank=True,null=True)