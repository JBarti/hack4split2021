#!/bin/sh

gunicorn app:app -b 0.0.0.0:${PORT:-8080}
