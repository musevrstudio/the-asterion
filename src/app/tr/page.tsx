import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("tr", "home");

export default function Page() {
  return <HomePage locale="tr" />;
}
