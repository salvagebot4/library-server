

/*Base Imports*/
const http = require("http");
const url = require("url");

/*File Imports*/
//CONTROLLERS
const { UserController } = require("./Controllers/userController");
const {BookController} = require("./Controllers/bookController");
const { CheckouthistoryController} = require("./Controllers/checkouthistoryController");
const { DeviceController } = require("./Controllers/deviceController");
const {MediaController} = require("./Controllers/mediaController");
const {ProductController} = require("./Controllers/productController");
const {RoomController} = require("./Controllers/roomController");
//AUTHENTICATE
//UTILS
const { getReqData } = require("./utility");



//Usage: parse JSON
//  const data = await getReqData(req);


const PORT = process.env.PORT || 5000;

const res_header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

const error_header = {
    "Content-Type": "application/json"
}

//Node server. req = request (from user) / res = response (send back to user)
const server = http.createServer(async (req, res) => {
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.path;
    const method = req.method;
    console.log(`Route hit: ${path} : ${method}`);

    //CORS preflight request handler (do not change)
    if (method === "OPTIONS") {
        res.writeHead(204, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, authorization",
            "Access-Control-Max-Age": 2592000
        });
        res.end();
        return;
    }

/*GET Routes*/

    //Brief description of route here this is a test for home
    else if (path === "/" && method === "GET") {
        // Response headers (200 -> Success)
        res.writeHead(200, res_header);
        // Send the response data
        res.end(JSON.stringify("Hello Library!!!")); 
    }

    //This route gets all users data
    else if (path === "/users" && method === "GET") {

        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const users = await new UserController().getAllUsers();
            console.log(users);
            // Send response data
            res.end(JSON.stringify(users)); 
        } catch(error) {
            // Set error
            res.writeHead(500, error_header);
            // Send error
            res.end(JSON.stringify({ message: error.message }));
        }
    }
    else if (path === "/products" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const products = await new ProductController().getAllProducts();
            console.log(products );
            // Send response data
            res.end(JSON.stringify(products )); 
        } catch(error) {
            // Set error
            res.writeHead(500, error_header);
            // Send error
            res.end(JSON.stringify({ message: error.message }));
        }
    }
    else if(path === "/products/books" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const books = await new BookController().getAllBooks();
            console.log(books);
            // Send response data
            res.end(JSON.stringify(books)); 
        } catch(error) {
            // Set error
            res.writeHead(500, error_header);
            // Send error
            res.end(JSON.stringify({ message: error.message }));
        }
    }
    
    else if (path === "/products/devices" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const devices = await new DeviceController().getAllDevices();
            console.log(devices);
            // Send response data
            res.end(JSON.stringify(devices)); 
        } catch(error) {
            // Set error
            res.writeHead(500, error_header);
            // Send error
            res.end(JSON.stringify({ message: error.message }));
        }
    }
    else if(path === "/products/medias" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const medias = await new MediaController().getAllMedias();
            console.log(medias);
            // Send response data
            res.end(JSON.stringify(medias)); 
        } catch(error) {
            // Set error
            res.writeHead(500, error_header);
            // Send error
            res.end(JSON.stringify({ message: error.message }));
        }
    }

    else if(path === "/rooms" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const rooms = await new RoomController().getAllRooms();
            console.log(rooms);
            // Send response data
            res.end(JSON.stringify(rooms)); 
        } catch(error) {
            // Set error
            res.writeHead(500, error_header);
            // Send error
            res.end(JSON.stringify({ message: error.message }));
        }
    }
    else if(path === "/checkoutHistory" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const checkouthistories = await new CheckouthistoryController().getAllCheckoutHistories();
            console.log(checkouthistories);
            // Send response data
            res.end(JSON.stringify(checkouthistories)); 
        } catch(error) {
            // Set error
            res.writeHead(500, error_header);
            // Send error
            res.end(JSON.stringify({ message: error.message }));
        }
    }
    
    
    
    //make route to 'GET' ALL products here
    //TODO

    /*
        GET routes for each table

    */

/*POST Routes*/

/*PUT Routes*/


});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});