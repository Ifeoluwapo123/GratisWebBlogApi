# RESTFUL API of a simple blog api

## Project Setup

### Run "npm install" in your terminal
* To install all dependencies for the project to start working

### Create a .env file and insert the following

#### local daatabase configuration
* DATABASE_HOST=localhost
* DATABASE_DIALECT=mysql
* DATABASE_USERNAME=root
* DATABASE_PORT=3306
* DATABASE_PASSWORD=your-database-password
* DATABASE_NAME=your-database-name
* DATABASE_REMOTE_HOST=your-remote-database-host
* DATABASE_REMOTE_PASSWORD=your-remote-database-password
* DATABASE_REMOTE_USERNAME=your-remote-database-username
* DATABASE_REMOTE_NAME=your-remote-database-name

#### remote daatabase configuration
DATABASE_HOST=localhost
DATABASE_DIALECT=mysql
DATABASE_USERNAME=root
DATABASE_PASSWORD=mysqlroot
DATABASE_PORT=3306
DATABASE_NAME=blogDb
DATABASE_REMOTE_HOST=sql5.freemysqlhosting.net
DATABASE_REMOTE_PASSWORD=z6uESRT92L
DATABASE_REMOTE_USERNAME=sql5438481
DATABASE_REMOTE_NAME=sql5438481

### Run "npm run dev" or "npm start" 
* Run "npm run dev" or "npm start" in your terminal to start the project

### Run "npm run test"
* Run "npm run test" in your terminal to run tests

### All api end points

#### Get all blog posts
* https://gratis-blogsite.herokuapp.com/api/posts
* GET REQUEST


#### Get all blog posts
* https://gratis-blogsite.herokuapp.com/api/posts
* GET REQUEST


#### Get a blog post by id
* https://gratis-blogsite.herokuapp.com/api/posts/64efe8c1-34d3-4dbd-91e3-793fa1af8e17
* GET REQUEST


#### Create a blog post
* https://gratis-blogsite.herokuapp.com/api/posts
* POST REQUEST
* Request Body 
{
    "title": "Nigerian National Museum22888",
    "description": "The Nigerian National Museum."
}


#### Update a blog posts
* https://gratis-blogsite.herokuapp.com/api/posts/64efe8c1-34d3-4dbd-91e3-793fa1af8e17
* PUT REQUEST
* Request Body
* {
*    "title":"Biggest City in the Whole World6",
*    "description":"The largest city in the world."
* }


#### Delete a blog posts
* https://gratis-blogsite.herokuapp.com/api/posts/64efe8c1-34d3-4dbd-91e3-793fa1af8e17
* DELETE REQUEST


### Pagination
* https://gratis-blogsite.herokuapp.com/api/posts/pg?page=1&size=1
* page attribute for page number starting from one
* size attribute for number of data per page
* GET REQUEST


#### Create Comment
* https://gratis-blogsite.herokuapp.com/api/comments
* POST REQUEST
* Request Body 
* {
*    "comment": "coooooooooool",
*    "postId": "64efe8c1-34d3-4dbd-91e3-793fa1af8e17"
* }


#### Get all comments
* https://gratis-blogsite.herokuapp.com/api/comments
* GET REQUEST


#### Get a comment by id
* https://gratis-blogsite.herokuapp.com/api/comments/8622d6f4-5b25-4a3a-b3ac-b3a4fc715e47
* GET REQUEST


#### update a comment 
* https://gratis-blogsite.herokuapp.com/api/comments/8622d6f4-5b25-4a3a-b3ac-b3a4fc715e47
*  PUT REQUEST
* Request Body
* {
*    "comment": "Yesrrrr"
* }


#### Delete a comment by id
* https://gratis-blogsite.herokuapp.com/api/comments/8622d6f4-5b25-4a3a-b3ac-b3a4fc715e47
* DELETE REQUEST