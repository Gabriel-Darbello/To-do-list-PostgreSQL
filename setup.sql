CREATE USER todolist_admin WITH PASSWORD '';
CREATE DATABASE todolist;
GRANT ALL PRIVILEGES ON DATABASE todolist TO todolist_admin;
\c todolist
