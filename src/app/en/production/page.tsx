import { ProductionPage } from "@/components/IndexPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "production");

export default function Page() {
  return <ProductionPage locale="en" />;
}
