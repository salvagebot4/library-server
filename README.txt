# library-server
NodeJS server that handles HTTP requests


TODO:

Documentation on every single route

'GET' routes calls a function in a "exampleController.js" then calls a function in "exampleModel.js" that receives data through queries
'POST' routes calls a function in a "exampleController.js" then calls a function in "exampleModel.js" that inputs data through queries
'PUT' routes calls a function in a "exampleController.js" then calls a function in "exampleModel.js" that updates data through queries

Examples: 
in line 68 
path === "/api/users" && method === "GET"

this route gets all users data though a function called "getAllUsers();"

in line 208
else if (path === "/api/register-user" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const userData = JSON.parse(requestData);
        console.log(userData);
        // Create the new user
        const newUser = await new UserController().createUser(userData); //this route registers a user data though a function called "createUser(userData);"
    
       
        // Send the new user data in response
        res.end(JSON.stringify(userData));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}



in line 357 
path === "/api/update-user" && method === "PUT"

this route updates a user data though a function called "updateUser(userData);"
