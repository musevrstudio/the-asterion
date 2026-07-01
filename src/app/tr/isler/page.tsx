import { WorkIndex } from "@/components/IndexPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("tr", "work");

export default function Page() {
  return <WorkIndex locale="tr" />;
}
