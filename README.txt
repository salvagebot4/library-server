# library-server
NodeJS server that handles HTTP requests


TODO:

Documentation on every single route

'GET' routes calls a function in a "exampleController.js" then calls a function in "exampleModel.js" that receives data through queries
'POST' routes calls a function in a "exampleController.js" then calls a function in "exampleModel.js" that inputs data through queries
'PUT' routes calls a function in a "exampleController.js" then calls a function in "exampleModel.js" that updates data through queries

Examples: 

GET : /api/users 
this route gets all users data 
example data:
{
 	"email": "john.doe@example.com",
		"password": "password123",
		"role": "student",
		"first_name": "John",
		"last_name": "Doe",
		"item_limit": 5,
		"day_limit": 14,
		"enabled": true,
		"is_deleted": false
}


POST : api/registerUser
this route registers a user data
example data:
{
	"email": "example@example.com",
	"password": "1234",
	"role": "admin",
	"first_name": "Test",
	"last_name":"Testing"
}

PUT : /api/update-user
this route updates a user data 
example data:
{
	"new_value" : "Tony",
	"column_name": "first_name",
	"email" : "kevin@example.com"
}