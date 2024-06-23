import express from "express";
import productsRouter from "./routes/products.routes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Smart Shop API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
