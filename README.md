# login-register

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/stevaopablo/login-register.git
    cd login-register
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/5) file in the root directory and add your MongoDB connection string and a password:
    ```env
    PASSWORD = 'your_password';
    MONGO_URL = 'your_mongo_url'
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. The server will be running at `http://localhost:3000`.

## API Endpoints

### Register

- **URL:** `/auth/register`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```
- **Response:**
    ```json
    {
        "msg": "your_username registered successfully"
    }
    ```

### Login

- **URL:** `/auth/login`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```
- **Response:**
    ```json
    {
        "user": {
            "_id": "user_id",
            "username": "your_username",
            "password": "hashed_password"
        },
        "token": "jwt_token"
    }
    ```

## Configuration

- The JWT secret key is configured in [authConfig.js](http://_vscodecontentref_/6).
- MongoDB connection string and password are configured in the [.env](http://_vscodecontentref_/7) file.

## Dependencies

- bcryptjs: ^2.4.3
- dotenv: ^16.4.7
- express: ^4.21.2
- jsonwebtoken: ^9.0.2
- mongodb: ^6.13.0
- mongoose: ^8.9.6
- nodemon: ^3.1.9

## License

This project is licensed under the ISC License.
