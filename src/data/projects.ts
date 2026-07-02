export type Preview = "chart" | "model" | "pipeline" | "web";

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  theme: "dark" | "light";
  preview: Preview;
  stack: string[];
  summary: string;
  metrics: string[];
};

export const projects: Project[] = [
  project("stockforecast", "StockForecast", "light", "chart"),
  project("llm-tft", "LLM-TFT", "dark", "model"),
  project("ai-sentiment", "AI Sentiment", "dark", "pipeline"),
  project("dashboard", "Dashboard Infrastructure", "light", "web"),
  project("portfolio-system", "Portfolio System", "dark", "web"),
  project("market-pipeline", "Market Pipeline", "light", "pipeline"),
  project("xai-reports", "XAI Reports", "dark", "chart"),
  project("resume-matcher", "Resume Matcher", "light", "model"),
];

function project(slug: string, title: string, theme: "dark" | "light", preview: Preview) {
  return {
    slug,
    title,
    theme,
    preview,
    kicker: "selected work / interface preview",
    stack: ["Next.js", "Python", "AI/Data"],
    summary: `${title} case study for AI, data, dashboard, and web systems.`,
    metrics: ["Research-ready", "Deploy-ready", "Portfolio-ready"],
  };
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
