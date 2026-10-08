import express from "express";
import cors from "cors";

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "buyer-marketplace-api" });
});

app.get("/api/products", (_req, res) => {
  res.json([
    {
      id: 1,
      name: "B2B Wholesale Packaging",
      category: "Business Supplies",
      price: 149,
      buyerType: "business",
      matchScore: 92,
    },
    {
      id: 2,
      name: "Smart Office Kit",
      category: "Office Tech",
      price: 299,
      buyerType: "business",
      matchScore: 88,
    },
    {
      id: 3,
      name: "Eco-Friendly Home Set",
      category: "Consumer Goods",
      price: 89,
      buyerType: "consumer",
      matchScore: 90,
    },
    {
      id: 4,
      name: "Digital Sales Bundle",
      category: "Software",
      price: 499,
      buyerType: "business",
      matchScore: 95,
    }
  ]);
});

app.listen(port, () => {
  console.log(`Marketplace API running on http://localhost:${port}`);
});
