import type { Metadata } from "next";
import ProductsPage from "./ProductPage";


export const metadata: Metadata = {
  title: "Pharmaceutical Products in Tamil Nadu | Zibral Healthcare",
  description:
    "Explore Zibral Healthcare's pharmaceutical products including antibiotics, cough syrups, digestive care, nutritional supplements, and healthcare solutions.",
};

export default function Page() {
  return <ProductsPage />;
}