#!/bin/sh

# initialize your flask environment
# export FLASK_APP=microcmp.py
# python3 -m venv venv 
# source venv/bin/activate
# pip install -r requirements.txt

flask --version

# run this to reset migrations
# rm -rf ./migrations
# rm -rf ./__pycache__
# rm -rf ./app/__pycache__
# rm -rf ./app/api/__pycache__
# rm -rf ./app/auth/__pycache__
# rm -rf ./app/errors/__pycache__
# rm -rf ./app/main/__pycache__
# rm -rf ./app/api/__pycache__
# IMPORTANT -- DROP TABLE alembic_version on your database 
# flask db init 
# flask db migrate 
# If nothing has changed you will see this message:
# INFO  [alembic.env] No changes in schema detected.
# make changes to the models and then run flask db migrate to detect the changes and upgrade 
# run this if your local version out of sync with the database alembic version 
# flask db heads 
# flask db stamp heads
# flask db current 

