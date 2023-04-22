# library-server
NodeJS server that handles HTTP requests

Documentation on every single route

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

GET : /api/productTypes
this route gets all productTypes data 
example data:
{
    "type_id": 1,
    "type_name": "Book"
}

GET : /api/productInstances
this route gets all productInstances data 
example data:
{
    "instance_id": 1,
    "product_id": "10003",
    "email": "morgan@example.com",
    "status_type_id": 1,
    "checked_out_date": "2023-04-21T05:00:00.000Z",
    "returned_date": "2023-04-21T05:00:00.000Z",
    "is_deleted": false
}

GET : /api/statusTypes
this route gets all statusTypes data 
example data:
{
    "type_id": 1,
    "status_name": "Available"
}

GET : /api/products
this route gets all products data 
example data:
{
    "product_id": "10001",
    "product_type_id": 1,
    "product_name": "The Catcher in the Rye",
    "cost": "10.99",
    "fine_multiplier": "0.25",
    "is_deleted": false,
    "is_featured": false,
	"status_type_id": 1
}

GET : /api/products/books
this route gets all books data 
example data:
{
    "author": "Jane Doe",
    "description": "A thriller novel",
    "publisher": "HarperCollins",
    "publication_date": "2022-02-01T06:00:00.000Z",
    "product_id": "10001",
    "page_count": 320
}

GET : /api/products/devices
this route gets all devices data 
example data:
{
    "product_id": "20001",
    "manufacturer": "Apple"
}

GET : /api/products/medias
this route gets all medias data 
example data:
{
    "product_id": "30001",
    "author": "Stephen King",
    "description": "A story about hope and perseverance.",
    "publisher": "Hodder & Stoughton",
    "publication_date": "2015-02-25T06:00:00.000Z",
    "file_size": "2.2GB",
    "is_interactive": false
}

GET : /api/rooms
this route gets all rooms data 
example data:
{
    "room_number": "201",
    "email": "john.doe@example.com",
    "room_size": "Large",
    "reserved_date": null,
    "is_reserved": false
}

GET : /api/checkoutHistory
this route gets all checkoutHistory data 
example data:
{
    "checkout_id": 21,
    "instance_id": 2
}

--------------------------------------------------------------------
POST : /api/register-User
this route registers a user data
example data:
{
	"email": "example@example.com",
	"password": "1234",
	"role": "admin",
	"first_name": "Test",
	"last_name":"Testing"
}

POST : /api/add-productType
this route registers a productType
example data:
{
    "type_id" : "4",
    "type_name" : "Device"
}

POST : /api/add-product
this route registers a product
example data:
{
	"product_id": "10003",
	"product_type_id": "1",
	"product_name": "Food 101",
	"cost": "5.00",
	"fine_multiplier": "0.25"	
}

POST : /api/add-productInstance
this route registers a productInstance
example data:
{
	"instance_id" : "1",
	"product_id" : "10003",
	"email" : "kevin@example.com",
	"checked_out_date" : "2023-04-21",
	"returned_date" : "2023-04-21"
}

POST : /api/add-device
this route registers a device
example data:
{
    "product_id" : "10003",
	"manufacturer" : "ToysRUS"
}

POST : /api/add-media
this route registers a media
example data:
{
    "product_id" : "10003",
    "author" : "Kevin Zheng",
    "description": "Made by Kevin",
    "publisher" : "Kevin", 
    "publication_date" : "2023-04-20",
    "file_size" : "1GB",
    "is_interactive" : "true"
}

POST : /api/add-book
this route registers a book
example data:
{
    "author": "KEV",
    "description" : "THIS IS KEV",
    "publisher" : "ALSO KEV",
    "publication_date" : "2023-04-20",
    "product_id" : "10003",
    "page_count" : "69"
}

POST : /api/add-checkoutHistory
this route registers a checkoutHistory
example data:
{
	"checkout_id" : "21",
	"instance_id" : 1
}

POST : /api/add-statusType
this route adds a statusType
example data:
{
	"type_id" : "2",
	"status_name" : "OVERDUE"
}
--------------------------------------------------------------------

PUT : /api/update-user
this route updates a user data 
example data:
{
	"new_value" : "Tony",
	"column_name": "first_name",
	"email" : "kevin@example.com"
}

PUT : /api/update-productType
this route updates a productType
example data:
{
    "new_value" : "Electronic",
	"column_name": "type_name",
    "type_id" : 4
}

PUT : /api/update-product
this route updates a product
example data:
{
    "new_value" : "Cool Fish",
	"column_name": "product_name",
    "product_id" : "10003"
}

PUT: /api/update-productInstance
this route updates a productInstance
example data: 
{
	"new_value" : "morgan@example.com" ,
	"column_name" : "email",
	"instance_id" : "1"
}

PUT : /api/update-device
this route updates a device
example data:
{
    "new_value" : "Microsoft",
	"column_name": "manufacturer",
    "product_id" : "10003"
}

PUT : /api/update-book
this route updates a book
example data:
{
    "new_value" : "Morgan",
	"column_name": "author",
    "product_id" : "10003"
}

PUT : /api/update-room
this route updates a room
example data:
{
    "new_value" : "kevin@example.com",
	"column_name": "email",
    "room_number" : "201"
}

PUT : /api/update-media
this route updates a media
example data:
{
    "new_value" : "Alex",
	"column_name": "publisher",
    "product_id" : "10003"
}

PUT : /api/update-checkoutHistory
this route updates a checkoutHistory
example data:
{
	"new_value" : "2" ,
	"column_name" : "instance_id",
	"checkout_id" : "21"
}

PUT : /api/update-statusType
this route updates a statusType
example data:
{
	"new_value" : "Available" ,
	"column_name" : "status_name",
	"type_id" : "1"	
}