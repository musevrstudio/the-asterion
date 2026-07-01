import { JournalPage } from "@/components/IndexPages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "journal");

export default function Page() {
  return <JournalPage locale="en" />;
}
