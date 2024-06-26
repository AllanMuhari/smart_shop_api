Sure! Here's a detailed README.md file to guide users on how to set up and run the Smart Shop Products API project.

---

# Smart Shop Products API

## Overview

The Smart Shop Products API is a RESTful service built with Node.js, Express, and PostgreSQL. It allows clients to perform CRUD (Create, Read, Update, Delete) operations on a collection of products stored in a PostgreSQL database.

## Features

- **Create** a new product
- **Read** all products or a specific product by ID
- **Update** an existing product by ID
- **Delete** a product by ID

## Project Structure

```
smart-shop-api/
├── src/
│   ├── controllers/
│   │   └── productsController.js
│   ├── routes/
│   │   └── products.routes.js
│   ├── db/
│   │   └── db.config.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or later)
- PostgreSQL (v12 or later)
- npm (v6 or later) or yarn (v1.x or later)

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AllanMuhari/smart_shop_api.git
   cd SMART_SHOP_API
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root of the project and add the following environment variables. Replace the placeholders with your actual PostgreSQL configuration details:

   ```bash
   PORT=your_port
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   ```

4. **Setup PostgreSQL Database**

   - Ensure PostgreSQL is running.
   - Create a new database:

     ```bash
     createdb your_db_name
     ```

   - Run the SQL script to create the `products` table and insert initial data. You can do this by connecting to your PostgreSQL database and executing the script.

     ```sql
     CREATE TABLE products (
       id SERIAL PRIMARY KEY,
       productThumbnail VARCHAR(500) NOT NULL,
       productTitle VARCHAR(50) NOT NULL,
       productDescription TEXT NOT NULL,
       productCost VARCHAR(50) NOT NULL,
       onOffer BOOLEAN NOT NULL
     );

     INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer)
     VALUES
     ('http://example.com/thumbnail1.jpg', 'Product 1', 'Description for Product 1', '10.99', true),
     ('http://example.com/thumbnail2.jpg', 'Product 2', 'Description for Product 2', '15.49', false),
     ('http://example.com/thumbnail3.jpg', 'Product 3', 'Description for Product 3', '7.99', true);
     ```

5. **Run the Server**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

   The server should now be running at `http://localhost:8080`.

## API Endpoints

The following endpoints are available:

- **GET /api/products**: Retrieve all products.

  - Example: `GET http://localhost:8080/products`

- **GET /api/products/:id**: Retrieve a single product by ID.

  - Example: `GET http://localhost:8080/products/1`

- **POST /api/products**: Create a new product.

  - Example: `POST http://localhost:8080/products`
  - Request body:
    ```json
    {
      "productThumbnail": "http://example.com/thumbnail4.jpg",
      "productTitle": "Product 4",
      "productDescription": "Description for Product 4",
      "productCost": "12.99",
      "onOffer": true
    }
    ```

- **PATCH /api/products/:id**: Update an existing product by ID.

  - Example: `PATCH http://localhost:8080/products/1`
  - Request body:
    ```json
    {
      "productThumbnail": "http://example.com/thumbnail4_updated.jpg",
      "productTitle": "Updated Product 4",
      "productDescription": "Updated description for Product 4",
      "productCost": "15.99",
      "onOffer": false
    }
    ```

- **DELETE /api/products/:id**: Delete a product by ID.
  - Example: `DELETE http://localhost:8080/products/1`

## Development

To contribute to the project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request.

This README provides a comprehensive guide on setting up and running the Smart Shop Products API. Adjust the details in the examples (like repository URLs) to match your actual project specifics.
