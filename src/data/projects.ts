export type Preview = "chart" | "model" | "pipeline" | "web" | "award";
export type WorkKind = "project" | "award";
export type PopupMedia = "image" | "video";

export type WorkMedia = {
  image: string;
  video: string;
  pdf: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  theme: "dark" | "light";
  preview: Preview;
  popup: PopupMedia;
  kind: WorkKind;
  href: string;
  stack: string[];
  summary: string;
  metrics: string[];
  media: WorkMedia;
};

const stack = ["Next.js", "Python", "AI/Data"];
const metrics = ["Research-ready", "Deploy-ready", "Portfolio-ready"];
const mediaRoot = "/media/work";

function media(slug: string, title: string): WorkMedia {
  const svgCovers = ["stockforecast", "absensiyolo"];
  const file = svgCovers.includes(slug)
    ? `${slug === "stockforecast" ? "stockforecast-pro-cover" : slug + "-cover"}.svg`
    : `${slug}.webp`;

  return {
    image: `${mediaRoot}/images/${file}`,
    video: `${mediaRoot}/videos/${slug}.mp4`,
    pdf: `${mediaRoot}/pdf/${slug}.pdf`,
    alt: `${title} preview media`,
  };
}

function item(slug: string, title: string, kind: WorkKind, theme: "dark" | "light", preview: Preview, popup: PopupMedia = "image"): Project {
  return {
    slug,
    title,
    kind,
    theme,
    preview,
    popup,
    href: `/projects/${slug}`,
    kicker: kind === "project" ? "selected work / interface preview" : "recognition / award preview",
    stack,
    summary: `${title} case study for AI, data, dashboard, and web systems.`,
    metrics,
    media: media(slug, title),
  };
}

export const projects: Project[] = [
  item("stockforecast", "StockForecast", "project", "dark", "chart", "video"),
  item("absensiyolo", "AbsensiYOLO", "project", "dark", "web", "video"),
  item("llm-tft", "LLM-TFT", "project", "dark", "model", "video"),
  item("ai-sentiment", "AI Sentiment", "project", "dark", "pipeline"),
  item("dashboard", "Dashboard Infrastructure", "project", "light", "web", "video"),
  item("portfolio-system", "Portfolio System", "project", "dark", "web", "video"),
  item("market-pipeline", "Market Pipeline", "project", "light", "pipeline"),
  item("xai-reports", "XAI Reports", "project", "dark", "chart"),
  item("resume-matcher", "Resume Matcher", "project", "light", "model"),
];

export const awards: Project[] = [
  item("llm-tft-thesis", "LLM-TFT Thesis", "award", "light", "award"),
  item("data-science-101", "Data Science 101", "award", "dark", "award"),
  item("aca-cloud", "ACA Cloud", "award", "dark", "award"),
  item("oracle-db", "Oracle DB", "award", "light", "award"),
  item("mandiri-sekuritas", "Mandiri Sekuritas", "award", "dark", "award"),
  item("undip", "Universitas Diponegoro", "award", "light", "award"),
];

export const allWork = [...projects, ...awards];

export function getProject(slug: string) {
  return allWork.find((project) => project.slug === slug);
}
