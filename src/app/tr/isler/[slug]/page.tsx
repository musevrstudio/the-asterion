import type { Metadata } from "next";
import { ProjectPage } from "@/components/ProjectPage";
import { getProject, projects } from "@/content/projects";
import { projectMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? projectMetadata("tr", project) : { title: "Proje | The Asterion" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectPage locale="tr" slug={slug} />;
}
