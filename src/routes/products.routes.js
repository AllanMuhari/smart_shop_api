import { Router } from "express";
import pool from "../db.config.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.status(200).json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    } else {
      res.status(200).json({ success: true, data: result.rows });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      productThumbnail,
      productTitle,
      productCost,
      productDescription,
      onOffer,
    } = req.body;

    console.log("Received data:", req.body);

    // Validate input
    if (
      typeof productThumbnail !== "string" ||
      typeof productTitle !== "string" ||
      typeof productDescription !== "string" ||
      typeof productCost !== "string" ||
      typeof onOffer !== "boolean"
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the details with correct data types",
      });
    }

    // Insert into the database
    const result = await pool.query(
      "INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [productThumbnail, productTitle, productDescription, productCost, onOffer]
    );

    // Send response
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});
router.patch("/:id", (req, res) => {
  res.send("Update a product");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a product");
});

export default router;
