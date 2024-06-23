import express from "express";
import productsRouter from "./routes/products.routes.js";
const app = express();
const port = 8080;

app.use(express.json());
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log("Server is running on port 8080");
});
