# URL Shortner Microservice

## Introduction
It is an url shortner microservice api.It is useful in shrinking long string of url to a number.This microservice is only for learning purpose . Here is a [Live Version](http://www.google.fr/ "Live Version")

### Dependancies Used
 1. Express  
 2. Mongodb 
 3. Mongoose 
 4. Cors 
 5. Body Parser
 6. Dotenv 

### User Stories

1. I can POST a URL to `[]/api/new` and I will receive a shortened URL in the JSON response. Example : `{"original_url":"www.google.com","short_url":1}`
2. If I pass an invalid URL that doesn't follow the valid `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`.
3. When I visit the shortened URL, it will redirect me to my original link.


#### Creation Example:

POST [project_url]/api/new - body (urlencoded) :  url=https://www.google.com

#### Usage:

[this_project_url]/api/3

#### Will redirect to:

https://www.google.com/
