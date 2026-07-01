import { StudioPage } from "@/components/IndexPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("tr", "studio");

export default function Page() {
  return <StudioPage locale="tr" />;
}
