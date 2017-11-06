drop database if exists lifeblog_test;
create database lifeblog_test;
use lifeblog_test;

create table `User`
(
	id int not null auto_increment,
    username varchar(50) not null unique,
    firstname varchar(50) not null,
    lastname varchar(50) not null,
    enabled tinyint(1) not null,
    `password` varchar(20) not null,
    email varchar(50) null,
    website text null,
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
    userid int not null,
    roleid int not null,
    primary key(userid, roleid),
    foreign key(roleid) references Role(id) on delete cascade,
    foreign key(userid) references `User`(id) on delete cascade
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
    foreign key(categoryid) references Category(id) on delete cascade,
    foreign key(userid) references `User`(id) on delete cascade
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
    foreign key(postid) references Post(id) on delete cascade,
    foreign key(replierid) references `User`(id) on delete cascade
);

select * from category;
select * from Post;

Select p.* from Post p, Category c
where p.categoryid = c.id
 and p.categoryid = 101;
 
 Select p.* from Post p,  Category c  
where p.categoryid = c.id  and p.categoryid = 101

select * from User u, Role r, UserRole ur
where u.id = ur.userid
and r.id = ur.roleid
and u.username = 'ymunson0';

use lifeblog;
select * from user;

select * from role;

select * from UserRole;
insert into UserRole values( 1,1);
insert into UserRole values( 1,2);
insert into UserRole values( 2,1);
insert into UserRole values( 3,2);