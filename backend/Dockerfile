FROM python:3.11.2-slim-buster

RUN mkdir /app
WORKDIR /app

COPY . .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["bash", "django-start.sh"]