import { OriginalsPage } from "@/components/IndexPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("tr", "originals");

export default function Page() {
  return <OriginalsPage locale="tr" />;
}
