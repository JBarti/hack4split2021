FROM python:3-alpine

LABEL Version 0.1
LABEL Name h4s-backend

WORKDIR /usr/src/app

RUN pip install pipenv
COPY . .
RUN pipenv install --system --deploy --ignore-pipfile

EXPOSE 80

CMD ["gunicorn", "app:app", "-b", "0.0.0.0:80"]
