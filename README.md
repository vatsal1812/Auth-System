# Auth-System
The code is organized into different folders (models, routes, middleware), separating concerns.

Implementation Points in the Folder Structure:

-> User Registration and Login: Implemented in routes/auth.js.

-> MongoDB User Schema: Defined in models/User.js.

-> Authentication Middleware: Implemented in middleware/auth.js.

-> Protected Routes: Implemented in routes/user.js.

-> Server Configuration and Route Setup: Implemented in server.js.

-> Middleware for authentication is separated into middleware/auth.js, and JOI validation is used for request validation. Error handling could be further enhanced by creating a custom error-handling middleware.

-> Route handlers are in routes/auth.js and routes/user.js, the authentication logic is within auth.js, and the database interactions are encapsulated in the Mongoose model (models/User.js).

-> The code uses asynchronous functions with async/await for handling database operations and includes basic error handling with try/catch blocks.

-> The User.js model in models/ is appropriately designed to store user data, including fields for email and password.

-> The schema includes essential fields like email and password. The password is stored securely with hashing, ensuring efficient and secure data storage.

-> Basic error handling is implemented using try/catch blocks, and error messages are returned with relevant status codes (e.g., 400 for bad requests).
The code returns appropriate error messages (e.g., "Invalid email or password") and status codes.

-> JOI is used for request validation in registration and login routes, ensuring that inputs are sanitized and validated before processing.
JOI validation can be configured to strip unknown fields, preventing unnecessary data from being processed. This was implied but should be explicitly configured.

API DOCUMENTATION

This API provides authentication and user profile functionality.
This API uses JWT (JSON Web Token) for authentication. For protected routes, include the JWT token in the Authorization header as a Bearer token.

Endpoints ->
Register User

URL: POST /api/auth/register

Authentication Required: No

Description: Register a new user

Request

Headers:

Content-Type: application/json

Parameters:

email (string): User's email address. [Required]
password (string): User's password. [Required]

Response

201: User registered successfully

400: Invalid input data

409: Email already exists

Login User

URL: POST /api/auth/login

Authentication Required: No

Description: Login a user

Request

Headers:

Content-Type: application/json

Parameters:

email (string): User's email address. [Required]
password (string): User's password. [Required]

Response

200: User logged in successfully

401: Invalid Credentials


Get Current User Profile

URL: GET /api/user/me

Authentication Required: Yes

Description: Get the current user's profile

Request

Headers:

Authorization: Bearer [JWT Token]

Response

	
200: User profile retrieved successfully

401: 	Unauthorized (invalid or missing token)

====> You can check the api-documentation at this url  http://localhost:5000/api-docs/#/
