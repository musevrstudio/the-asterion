import { JournalPage } from "@/components/IndexPages";

export const metadata = {
  title: "Seçili Geçmiş | The Asterion",
  description: "The Asterion pratiğiyle ilişkili seçili sergiler, konuşmalar ve kurumsal işbirlikleri.",
};

export default function Page() {
  return <JournalPage locale="tr" alternateHref="/en/studio/selected-history" />;
}
