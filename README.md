# :fries: Top100Movies App 

Top100Movies is a TypeScript Node.js Express application that allows users to sign up, add their favorite movies, write comments, rank them, and showcase their movie lists to their friends. The app utilizes PostgreSQL as its database, JSON Web Tokens (JWT) for authentication, and Sequelize as the ORM for interacting with the database.

## :lollipop: Project Structure 

The project follows a modular structure for better organization and maintainability:

- <font color="green">src</font>: This folder contains the source code of the movie app.

  - **`index.ts`**: The entry point of the application.

  - **`controllers`**: This folder contains the controllers for handling different routes.

    - **`userController.ts`**: Controller for user-related routes.

    - **`movieController.ts`**: Controller for movie-related routes.

  - **`models`**: This folder contains the data models used in the application.

    - **`userModel.ts`**: Data model for a user.

    - **`movieModel.ts`**: Data model for a movie.

  - **`utils`**: This folder contains utility functions used in the application.

    - **`logger.ts`**: Utility function for logging.

    - **`db.ts`**: Utility function for database connection 

- **`test`**: This folder contains the unit tests for the application.

  - **`userController.test.ts`**: Unit test for userController.

  - **`movieController.test.ts`**: Unit test for movieController.

- **`package.json`**: The package configuration file for managing dependencies and scripts.

- **`tsconfig.json`**: The TypeScript configuration file.

- **`README.md`**: The readme file with project documentation.


## :apple: Getting Started 

Follow these steps to set up and run the Top100Movies app:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/top100movies.git
   ```

2. Install dependencies:

   ```bash
   cd top100movies
   npm install
   ```

3. Set up the PostgreSQL database and update the connection details in the `utils/db.ts` file.

4. Start the server:

   ```bash
   npm start
   ```

The Top100Movies app should now be running locally. Visit `http://localhost:8080` in your browser to access the application.

## :post_office: API Routes 

- **User Routes**:

  - `POST /api/users/`: Create a new user account.

  - `GET /api/users/`: Get all users

  - `GET /api/users/:id`: Get user details.

  - `PUT /api/users/:id`: Update user details

  - `DELETE /api/users/:id`: Delete User

- **Movie Routes**:

  - `GET /api/movies/`: Get a list of your favorite movies.

  - `POST /api/movies/`: Add your favorite movie

  - `GET /movies/:id`: Get details of a specific movie.

  - `DELETE /movies/:id`: Delete a specific movie.

## :rocket: Authentication 

The Top100Movies app uses JSON Web Tokens (JWT) for user authentication. Include the JWT token in the headers of protected routes as follows:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

##  :ambulance: Testing

Run unit tests to ensure the correctness of the application:

```bash
npm test
```

## :beginner: Contributing 

Feel free to contribute to the development of Top100Movies by creating issues or submitting pull requests.
