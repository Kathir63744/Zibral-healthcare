// app/products/[slug]/page.tsx
import ProductsPage from "../ProductPage";
import { notFound } from "next/navigation";
import { products, createSlug, findProductBySlug } from "@/lib/products";

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: createSlug(product.name),
  }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  
  if (!product) {
    return {
      title: "Product Not Found | Zibral Healthcare",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} - ${product.generic} | Zibral Healthcare`,
    description: `${product.name} - ${product.generic}. Uses: ${product.uses.join(", ")}. ${product.benefits.join(" ")}`,
    keywords: `${product.name}, ${product.generic}, ${product.category}, Zibral Healthcare, pharmaceutical products`,
    openGraph: {
      title: `${product.name} - Zibral Healthcare`,
      description: product.uses.join(", "),
      images: [product.image],
      url: `https://zibralhealthcare.in/products/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Zibral Healthcare`,
      description: product.uses.join(", "),
      images: [product.image],
    },
    alternates: {
      canonical: `https://zibralhealthcare.in/products/${slug}`,
    },
  };
}

// Main page component
export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  // Render the ProductsPage with the selected product and isFullPage flag
  return <ProductsPage selectedProduct={product} isFullPage={true} />;
}