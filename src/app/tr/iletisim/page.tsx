import { ContactPage } from "@/components/IndexPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("tr", "contact");

export default function Page() {
  return <ContactPage locale="tr" />;
}
