import { OriginalsPage } from "@/components/IndexPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "originals");

export default function Page() {
  return <OriginalsPage locale="en" />;
}
