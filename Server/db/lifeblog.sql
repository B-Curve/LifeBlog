drop database if exists lifeblog;
create database lifeblog;
use lifeblog;

create table `User`
(
	id int not null auto_increment,
    username varchar(50) not null,
    firstname varchar(50) not null,
    lastname varchar(50) not null,
    email varchar(50) null,
    website varchar(100) null,
    primary key(id)
);

create table Role
(
	id int not null auto_increment,
    role varchar(30) not null,
    primary key(id)
);

create table UserRole
(
	id int not null auto_increment,
    roleid int not null,
    userid int not null,
    primary key(id),
    foreign key(roleid) references Role(id),
    foreign key(userid) references `User`(id)
);

create table Category
(
	id int not null auto_increment,
    `name` varchar(50) not null,
    description varchar(255) null,
    primary key(id)
);
create table Post
(
	id int not null auto_increment,
    userid int not null,
    categoryid int not null,
    title varchar(100) not null,
    body text not null,
    likes int null,
    primary key(id),
    foreign key(categoryid) references Category(id),
    foreign key(userid) references `User`(id)
);

create table Reply
(
	id int not null auto_increment,
    postid int not null,
    reply text not null,
    replydate datetime not null,
    replierid int not null,
    likes int null,
    primary key(id),
    foreign key(postid) references Post(id),
    foreign key(replierid) references `User`(id)
);

insert into `User`(username,firstname,lastname) values('abc','Asma','Tabassum');