FROM node:15.14.0-alpine3.10

WORKDIR /usr/src/app

COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./frontend/ ./

RUN yarn build


FROM python:3-alpine

WORKDIR /usr/src/app

ENV PORT 8080

COPY ./backend .

RUN pip install pipenv
RUN pipenv install --system --deploy --ignore-pipfile

COPY --from=0 /usr/src/app/build /usr/src/app/static

EXPOSE ${PORT}/tcp

CMD ["./run.sh"]

LABEL Version dev
LABEL Name h4s

