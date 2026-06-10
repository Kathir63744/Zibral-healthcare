import type { Metadata } from "next";
import ContactPage from "./ContactPage";


export const metadata: Metadata = {
  title: "Contact Zibral Healthcare | Pharmaceutical Company Tamil Nadu",
  description:
    "Contact Zibral Healthcare for pharmaceutical product enquiries, healthcare partnerships, and business opportunities across Tamil Nadu.",
};

export default function Page() {
  return <ContactPage />;
}