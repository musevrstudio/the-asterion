import type { MetadataRoute } from "next";
import { projectPath, routePaths } from "@/content/navigation";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.values(routePaths).flatMap((routes) => Object.values(routes));
  const projectRoutes = projects.flatMap((project) => [
    projectPath("en", project.slug),
    projectPath("tr", project.slug),
  ]);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/en" || path === "/tr" ? 1 : 0.7,
  }));
}
