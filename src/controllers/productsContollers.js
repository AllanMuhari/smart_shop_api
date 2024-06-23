import pool from "../db.config.js";

export const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.status(200).json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      productThumbnail,
      productTitle,
      productCost,
      productDescription,
      onOffer,
    } = req.body;

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

    const result = await pool.query(
      "INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [productThumbnail, productTitle, productDescription, productCost, onOffer]
    );

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productThumbnail,
      productTitle,
      productCost,
      productDescription,
      onOffer,
    } = req.body;

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

    const result = await pool.query(
      "UPDATE products SET productThumbnail = $1, productTitle = $2, productCost = $3, productDescription = $4, onOffer = $5 WHERE id = $6 RETURNING *",
      [
        productThumbnail,
        productTitle,
        productCost,
        productDescription,
        onOffer,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await pool.query(
      "DELETE FROM products WHERE id = $1",
      [id]
    );
    if (deleteProduct.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
