python3 manage.py migrate
# create super user by using the the enviroment variables that DJANGO_SUPERUSER_USERNAME, DJANGO_SUPERUSER_PASSWORD, DJANGO_SUPERUSER_EMAIL
python3 manage.py createsuperuser --noinput
python3 manage.py runserver 0.0.0.0:8000