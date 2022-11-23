
create database tests;

create extension pgcrypto;
create type gender as enum ('male', 'female');
drop DOMAIN contact;

create table regions(
  region_id serial primary key,
  region varchar(64) not null
);

create table users (
  user_id serial primary key,
  fullname varchar(96) not null,
  contact varchar(15) not null,
  username varchar(32) not null,
  password varchar(60) not null,
  region_id int references regions(region_id),
  gender varchar not null,
  created_at timestamp default current_timestamp
);


create table subjects (
  subject_id serial primary key,
  subject varchar(32) not null
);

create table unversities (
  unversity_id serial primary key,
  unversity varchar not null
);

create table faculties (
  faculty_id serial primary key,
  faculty varchar(64) not null,
  grands int not null,
  contracts int not null,
  grand_mark float not null,
  contract_mark float not null,
  subject_1 int references subjects(subject_id) not null,
  subject_2 int references subjects(subject_id) not null,
  unversity_id int references unversities(unversity_id) not null
);


create table tests (
  test_id serial primary key,
  test_question text not null,
  test_variants text[] not null,
  test_answer text not null,
  subject_id int references subjects(subject_id) not null
);


create table exams (
  exam_id serial primary key,
  user_id int references users(user_id) not null,
  subject_1 int references subjects(subject_id) not null,
  subject_2 int references subjects(subject_id) not null,
  unversity_id int references unversities(unversity_id) not null,
  faculty_id int references faculties(faculty_id) not null,
  created_at timestamp default current_timestamp,
  finished_at timestamp default null
);

create table user_answers (
  answer_id serial primary key,
  answer text not null,
  test_id int references tests(test_id) not null,
  user_id int references users(user_id) not null,
  exam_id int references exams(exam_id) not null
);

