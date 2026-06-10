import type { Metadata } from "next";
import AboutPage from "./AboutPage";


export const metadata: Metadata = {
  title: "About Zibral Healthcare | Pharma Company in Tamil Nadu",
  description:
    "Learn about Zibral Healthcare, a pharmaceutical company committed to delivering quality healthcare products and pharmaceutical solutions across Tamil Nadu.",
};

export default function Page() {
  return <AboutPage />;
}