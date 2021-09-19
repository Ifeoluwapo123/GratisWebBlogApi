# RESTFUL API of a simple blog api

## Project Setup

### Run "npm install" in your terminal
* To install all dependencies for the project to start working

### Create a .env file and insert the following
* DATABASE_HOST=localhost
* DATABASE_DIALECT=mysql
* DATABASE_PORT=3306

### Run "npm run dev" or "npm start" 
* Run "npm run dev" or "npm start" in your terminal to start the project

### Run "npm run test"
* Run "npm run test" in your terminal to run tests

### All api end points

#### Get all blog posts
* http://localhost:3001/api/posts
#### GET REQUEST


#### Get all blog posts
* http://localhost:3001/api/posts
#### GET REQUEST


#### Get a blog post by id
* http://localhost:3001/api/posts/89817983-6067-4799-be0d-529a4d87b426
#### GET REQUEST


#### Create a blog post
* http://localhost:3001/api/posts
* POST REQUEST
* Request Body 
{
    "title": "Nigerian National Museum22888",
    "description": "The Nigerian National Museum."
}


#### Update a blog posts
* http://localhost:3001/api/posts/89817983-6067-4799-be0d-529a4d87b426
#### PUT REQUEST
* Request Body
{
    "title":"Biggest City in the Whole World6",
    "description":"The largest city in the world6 is Sermersooq in Greenland. Sermersooq, formally named Kommuneqarfik Sermersooq, was formed on January 1, 2009, from five smaller municipalities."

}


#### Delete a blog posts
* http://localhost:3001/api/posts/89817983-6067-4799-be0d-529a4d87b426
#### DELETE REQUEST


### Pagination
* http://localhost:3001/api/posts/pg?page=1&size=1
* page attribute for page number starting from one
* size attribute for number of data per page
#### GET REQUEST


#### Create Comment
* http://localhost:3001/api/comments
#### POST REQUEST
* Request Body 
{
    "comment": "coooooooooool",
    "postId": "de96fccd-866c-40d8-b35c-2fed3bfe84fd"
}


#### Get all comments
* http://localhost:3001/api/comments
#### GET REQUEST


#### Get a comment by id
* http://localhost:3001/api/comments/8a88e739-c841-482b-a5dd-6008862fea31
#### GET REQUEST


#### update a comment 
* http://localhost:3001/api/comments/cbb7d2d7-0fce-4d53-bb26-abf6e986bc62
####  UPDATE REQUEST
* Request Body
{
    "comment": "Yesrrrr"
}


#### Delete a comment by id
* http://localhost:3001/api/comments/cbb7d2d7-0fce-4d53-bb26-abf6e986bc62
### DELETE REQUEST