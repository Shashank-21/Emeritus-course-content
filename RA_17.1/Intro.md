### Adding Express Routes with JSON Web Token

#### Assignment Introduction

In this assignment, you'll enhance an Express.js application by integrating JSON Web Tokens (JWT) to add a layer of authentication and authorization. You will focus on developing secure routes that differentiate between regular users and administrators, leveraging JWTs to enforce access controls.

The application you'll be working on acts as a backend for a content management system where users can interact with posts. The core requirement is that only authenticated users with an 'admin' role should be allowed to create, edit, or delete posts, ensuring that the system maintains data integrity and security.

#### Objectives

1. **Implement JWT Authentication:** You will integrate JWT into the Express application to handle user authentication, ensuring that tokens are issued upon successful login and required for accessing certain routes.

2. **Role-Based Authorization:** You will create middleware that examines a user's role from the decoded JWT, allowing only users with an 'admin' role to access specific routes for modifying content.

3. **Secure Route Creation:** You are tasked with adding and securing routes for post creation, editing, and deletion, applying your authorization middleware to protect these endpoints from unauthorized access.

#### Tasks

1. **Login Route:** Enhance the '/login' route to authenticate users and, upon success, return a JWT.

2. **isAdmin Middleware:** Develop the `isAdmin` middleware function to verify the user's role from the JWT. It should restrict access to certain routes if the user is not an admin.

3. **Protected Routes:** Implement and secure the routes '/posts/create', '/posts/edit/:id', and '/posts/delete/:id'. These routes should require a valid JWT and check for admin privileges before allowing modifications to the posts.

By completing this assignment, you'll gain hands-on experience with JWTs in Express.js, learning how to implement key authentication and authorization mechanisms in web applications. This foundational knowledge is crucial for backend development and securing web applications.
