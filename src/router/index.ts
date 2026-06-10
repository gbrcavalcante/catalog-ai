import { createBrowserRouter } from "react-router";
import { Layout } from "@/layout";
import { BrandDetails } from "@/pages/brand-details";
import { Brands } from "@/pages/brands";
import { ProductDetails } from "@/pages/product-details";
import { Products } from "@/pages/products";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Products },
      { path: "products/:id", Component: ProductDetails },
      { path: "brands", Component: Brands },
      { path: "brands/:id", Component: BrandDetails },
    ],
  },
]);
