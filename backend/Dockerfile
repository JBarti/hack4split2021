FROM python:3.8

LABEL Version 0.1
LABEL Name h4s-backend

WORKDIR /usr/src/app

ENV version=production

RUN apt update && apt install build-essential
RUN pip install pipenv
COPY . .
RUN pipenv install --verbose --system --deploy --ignore-pipfile

EXPOSE 80

CMD ["gunicorn", "app:app", "-b", "0.0.0.0:80"]
