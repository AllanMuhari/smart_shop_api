import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Get products");
});

router.get("/:id", (req, res) => {
  res.send("Get single product");
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
