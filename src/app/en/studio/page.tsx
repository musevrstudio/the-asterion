import { StudioPage } from "@/components/IndexPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "studio");

export default function Page() {
  return <StudioPage locale="en" />;
}
