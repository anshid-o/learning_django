from django.shortcuts import render

# Create your views here.
def hi(request):
    movies_data={
        'movies':[
        {
        'title':'Leo',
        'year':2023,
        'summary':'story of gangsters who living in LCU',
        'success':True
        },
        {
        'title':'Vikram',
        'year':2021,
        'summary':'story of gangsters who living in LCU',
        'success':True
        },
        {
        'title':'Kaithi',
        'year':2018,
        'summary':'story of gangsters who living in LCU',
        'success':False
        },
        {
        'title':'Jailer',
        'year':2023,
        'success':True
        },
    ]
    }
    return render(request,'hello.html',movies_data)