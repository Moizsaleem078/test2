from django.shortcuts import render
from .models import *
# Create your views here.
def indexpage(request):
 Main_obj=mainscreen.objects.all()
 Depression_articles=depression_articles.objects.all()
 print(Main_obj)
 context={
    'Main_obj':Main_obj,
    'Depression_articles':Depression_articles,
    }
 return render(request ,'index.html',context)

def formpage(request):
  if request.method == 'POST':
    survey=request.POST.get('user')
    data=list(request.POST.items())
    city=request.POST.get('city')
    gender=request.POST.get('gender')
    education=request.POST.get('education')
    message=request.POST.get('comment')
    en=formdata(education=education,city=city,gender=gender,survey_teken_before=survey,comment=message)
    en.save()
    return render(request ,'anxietyTest.html')
  return render(request ,'form.html',)

def formpage2(request):
  if request.method == 'POST':
    survey=request.POST.get('user')
    data=list(request.POST.items())
    city=request.POST.get('city')
    gender=request.POST.get('gender')
    education=request.POST.get('education')
    message=request.POST.get('comment')
    en=formdata(education=education,city=city,gender=gender,survey_teken_before=survey,comment=message)
    en.save()
    return render(request ,'DepressionTest.html')
  return render(request ,'form2.html',)

def About(request):
    return render(request ,'about.html')

