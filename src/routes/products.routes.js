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
    res.status(200).json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post("/", (req, res) => {
  res.send("Create product");
});
router.patch("/:id", (req, res) => {
  res.send("Update a product");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a product");
});

export default router;
