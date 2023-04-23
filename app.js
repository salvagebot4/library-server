

/*Base Imports*/
const http = require("http");
const url = require("url");

/*File Imports*/
//CONTROLLERS
const { UserController } = require("./Controllers/userController");
const {BookController} = require("./Controllers/bookController");
const { CheckoutHistoryController} = require("./Controllers/checkouthistoryController");
const { DeviceController } = require("./Controllers/deviceController");
const {MediaController} = require("./Controllers/mediaController");
const {ProductTypeController} = require("./Controllers/productTypeController");
const {ProductController} = require("./Controllers/productController");
const {ProductInstanceController} = require("./Controllers/productInstanceController");
const {RoomController} = require("./Controllers/roomController");
const {StatusTypeController} = require("./Controllers/statusTypeController");
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
    else if (path === "/api/users" && method === "GET") {

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
    else if (path === "/api/productTypes" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const productTypes = await new ProductTypeController().getAllProductsTypes();
            console.log(productTypes );
            // Send response data
            res.end(JSON.stringify(productTypes)); 
        } catch(error) {
            // Set error
            res.writeHead(500, error_header);
            // Send error
            res.end(JSON.stringify({ message: error.message }));
        }
    }
    else if (path === "/api/products" && method === "GET")
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
    else if (path === "/api/productInstances" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const productTypes = await new ProductInstanceController().getAllProductInstances();
            console.log(productTypes );
            // Send response data
            res.end(JSON.stringify(productTypes)); 
        } catch(error) {
            // Set error
            res.writeHead(500, error_header);
            // Send error
            res.end(JSON.stringify({ message: error.message }));
        }
    }
    else if(path === "/api/products/books" && method === "GET")
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
    
    else if (path === "/api/products/devices" && method === "GET")
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
    else if(path === "/api/products/medias" && method === "GET")
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

    else if(path === "/api/rooms" && method === "GET")
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
    else if(path === "/api/checkoutHistory" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const checkouthistories = await new CheckoutHistoryController().getAllCheckoutHistories();
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
      else if(path === "/api/statusTypes" && method === "GET")
    {
        try {
            // Response headers (200 -> Success)
            res.writeHead(200, res_header);
            // Get the users
            const checkouthistories = await new StatusTypeController().getAllStatusTypes();
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
    
/*POST Routes*/
else if (path === "/api/register-user" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const userData = JSON.parse(requestData);
        console.log(userData);
        // Create the new user
        const newUser = await new UserController().createUser(userData);
    
       
        // Send the new user data in response
        res.end(JSON.stringify(newUser));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
else if (path === "/api/login" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const data = JSON.parse(requestData);
        console.log(data);
        // Create the new user
        const newUser = await new UserController().postUserInfo(data);
    
       
        // Send the new user data in response

        res.end(JSON.stringify(newUser));

    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
else if (path === "/api/add-productType" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const data = JSON.parse(requestData);
        console.log(data);
        // Create the new user
        const newUser = await new ProductTypeController().addProductType(data);
    
       
        // Send the new user data in response
        res.end(JSON.stringify(data));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
else if (path === "/api/add-product" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const data = JSON.parse(requestData);
        console.log(data);
        // Create the new user
        const newUser = await new ProductController().addProduct(data);
    
        // Send the new user data in response
        res.end(JSON.stringify(data));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
else if (path === "/api/add-productInstance" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const data = JSON.parse(requestData);
        console.log(data);
        // Create the new user
        const newUser = await new ProductInstanceController().addProductInstance(data);
    
        // Send the new user data in response
        res.end(JSON.stringify(data));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
else if (path === "/api/add-device" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const data = JSON.parse(requestData);
        console.log(data);
        // Create the new user
        const newUser = await new DeviceController().addDevice(data);
    
       
        // Send the new user data in response
        res.end(JSON.stringify(data));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
else if (path === "/api/add-media" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const data = JSON.parse(requestData);
        console.log(data);
        // Create the new user
        const newUser = await new MediaController().addMedia(data);
    
       
        // Send the new user data in response
        res.end(JSON.stringify(data));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
else if (path === "/api/add-book" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const bookData = JSON.parse(requestData);
        console.log(bookData);
        // Create the new user
        const newUser = await new BookController().addBook(bookData);
    
       
        // Send the new user data in response
        res.end(JSON.stringify(bookData));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
else if (path === "/api/add-checkoutHistory" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const data = JSON.parse(requestData);
        console.log(data);
        // Create the new user
        const newUser = await new CheckoutHistoryController().addCheckoutHistory(data);
    
       
        // Send the new user data in response
        res.end(JSON.stringify(data));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
else if (path === "/api/add-statusType" && method === "POST") {
    try {
        res.writeHead(200, res_header);
        // Get the request data
        const requestData = await getReqData(req);
        // Parse the JSON data
        const data = JSON.parse(requestData);
        console.log(data);
        // Create the new user
        const newUser = await new StatusTypeController().addStatusType(data);
    
       
        // Send the new user data in response
        res.end(JSON.stringify(data));
    } catch (error) {
        // Set error
        res.writeHead(500, error_header);
        // Send error
        res.end(JSON.stringify({ message: error.message }));
    }
}
/*PUT Routes*/
else if (path === "/api/update-user" && method === "PUT") {
    try {
      res.writeHead(200, res_header);
      // Parse the JSON data
      const data = JSON.parse(await getReqData(req));
      
      console.log(data);
      // Update a product

      const result = await new UserController().updateUser(data);

      // Send the reservation data in response
      res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }
else if (path === "/api/update-productType" && method === "PUT") {
    try {
        res.writeHead(200, res_header);
        // Parse the JSON data
        const data = JSON.parse(await getReqData(req));
        
        console.log(data);
        // Update a product
  
        const result = await new ProductTypeController().updateproductType(data);
        console.log(result);
  
        // Send the reservation data in response
        res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }
else if (path === "/api/update-product" && method === "PUT") {
    try {
      res.writeHead(200, res_header);
      // Parse the JSON data
      const data = JSON.parse(await getReqData(req));
      
      console.log(data);
      // Update a product

      const result = await new ProductController().updateProduct(data);


      // Send the reservation data in response
      res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }
  else if (path === "/api/update-productInstance" && method === "PUT") {
    try {
      res.writeHead(200, res_header);
      // Parse the JSON data
      const data = JSON.parse(await getReqData(req));
      
      console.log(data);
      // Update a product

      const result = await new ProductInstanceController().updateProductInstance(data);


      // Send the reservation data in response
      res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }
  else if (path === "/api/update-device" && method === "PUT") {
    try {
      res.writeHead(200, res_header);
      // Parse the JSON data
      const data = JSON.parse(await getReqData(req));
      
      console.log(data);
      // Update a product

      const result = await new DeviceController().updateDevice(data);


      // Send the reservation data in response
      res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }
  else if (path === "/api/update-book" && method === "PUT") {
    try {
      res.writeHead(200, res_header);
      // Parse the JSON data
      const data = JSON.parse(await getReqData(req));
      
      console.log(data);
      // Update a product

      const result = await new BookController().updateBook(data);


      // Send the reservation data in response
      res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }
  else if (path === "/api/update-room" && method === "PUT") {
    try {
        res.writeHead(200, res_header);
        // Parse the JSON data
        const data = JSON.parse(await getReqData(req));
        
        console.log(data);
        // Update a product
  
        const result = await new RoomController().updateRoom(data);
        console.log(result);
  
        // Send the reservation data in response
        res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }
  else if (path === "/api/update-media" && method === "PUT") {
    try {
        res.writeHead(200, res_header);
        // Parse the JSON data
        const data = JSON.parse(await getReqData(req));
        
        console.log(data);
        // Update a product
  
        const result = await new MediaController().updateMedia(data);
        console.log(result);
  
        // Send the reservation data in response
        res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }
  else if (path === "/api/update-checkoutHistory" && method === "PUT") {
    try {
        res.writeHead(200, res_header);
        // Parse the JSON data
        const data = JSON.parse(await getReqData(req));
        
        console.log(data);
        // Update a product
  
        const result = await new CheckoutHistoryController().updateCheckoutHistory(data);
        console.log(result);
  
        // Send the reservation data in response
        res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }
  else if (path === "/api/update-statusType" && method === "PUT") {
    try {
        res.writeHead(200, res_header);
        // Parse the JSON data
        const data = JSON.parse(await getReqData(req));
        
        console.log(data);
        // Update a product
  
        const result = await new StatusTypeController().updateStatusType(data);
        console.log(result);
  
        // Send the reservation data in response
        res.end(JSON.stringify(data));
    } catch (error) {
      // Set error
      res.writeHead(500, error_header);
      // Send error
      res.end(JSON.stringify({ message: error.message }));
    }
  }

  // No route present
  else {
    res.writeHead(404, error_header);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});