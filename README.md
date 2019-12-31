# CMP

### College Management Platform

### Disclaimer
This project is a work in progress and by NO means complete yet. It is a learning tool for junior Python developers to get a better understanding of Python fundamentals and the Flask microframework.

### History 
I started this project with the goal of creating a free open source tool for colleges and schools to use to help manage applicant and student data.  This is also a learning project for me, since I come from a Node, Java, and Go background. This is my disclaimer: I am not an advanced Python Flask developer so I am using this project to help me learn Flask and hopefully improve my Python skills.   

#### Credits 
This project was inspired by a tutorial project created by Miguel Grinberg. Miguel is a extremely talented Python developer and an excellent teacher. Miguel has a very good [blog](https://blog.miguelgrinberg.com/) that I encourage new and old Python developers to check out.
* Forked from [miguelgrinberg/microblog](https://github.com/miguelgrinberg/microblog)

#### Setup
Take a peek at the setup.sh file in this project to get instructions on setting up and running this project after you git clone it.

#### Database
I use a Postgres database hosted on AWS RDS. You will need to change the database URL in your alembic.ini to connect to a database that you have setup.  The config.py supports a SQL Lite database for running locally and debugging.  

#### Deployment 
This project includes a Heroku Procfile deployment configuration. You could also deploy this application using the Python AWS EB CLI to an Elastic Beanstalk EC2 instance.




