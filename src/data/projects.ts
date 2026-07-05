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

type CoverFile = `${string}.${"svg" | "webp" | "png" | "jpg" | "jpeg"}`;

const stack = ["Next.js", "Python", "AI/Data"];
const metrics = ["Research-ready", "Deploy-ready", "Portfolio-ready"];
const mediaRoot = "/media/work";
const coverBySlug: Record<string, CoverFile> = {
  stockforecast: "stockforecast-pro-cover.svg",
  absensiyolo: "absensiyolo-cover.svg",
  bki: "bki.png",
  "llm-tft": "llm-tft.png",
  "aca-cloud": "aca-cloud.png",
  "oracle-db": "oracle-db.png",
  "data-analys": "data-analys.jpg",
  "data-science-101": "data-science-101.jpg",
  "data-science-methodology": "data-science-methodology.jpg",
  "data-visualitation": "data-visualitation.jpg",
  "Asisten-praktikum": "Asisten-praktikum.jpeg",
};

function media(slug: string, title: string): WorkMedia {
  const file = coverBySlug[slug] ?? `${slug}.webp`;

  return {
    image: `${mediaRoot}/images/${file}`,
    video: `${mediaRoot}/videos/${slug}.mp4`,
    pdf: `${mediaRoot}/pdf/${slug}.pdf`,
    alt: `${title} preview media`,
  };
}

function item(
  slug: string,
  title: string,
  kind: WorkKind,
  theme: "dark" | "light",
  preview: Preview,
  popup: PopupMedia = "image"
): Project {
  return {
    slug,
    title,
    kind,
    theme,
    preview,
    popup,
    href: `/projects/${slug}`,
    kicker: kind === "project"
      ? "selected work / interface preview"
      : "recognition / award preview",
    stack,
    summary: `${title} case study for AI, data, dashboard, and web systems.`,
    metrics,
    media: media(slug, title),
  };
}

export const projects: Project[] = [
  item("stockforecast", "StockForecast", "project", "dark", "web", "video"),
  item("absensiyolo", "AbsensiYOLO", "project", "dark", "web", "video"),
  item("bki", "BKI", "project", "dark", "web", "video"),
  item("llm-tft", "Hospital ", "project", "dark", "model", "video"),
];

export const awards: Project[] = [
  item("data-analys", "Data Analysis", "award", "dark", "award"),
  item("aca-cloud", "ACA Cloud", "award", "dark", "award"),
  item("oracle-db", "Oracle DB", "award", "dark", "award"),
  item("data-science-101", "Data Science 101", "award", "dark", "award"),
  item("data-science-methodology", "Data Science Methodology", "award", "dark", "award"),
  item("data-visualitation", "Data Visualization", "award", "dark", "award"),
  item("Asisten-praktikum", "Universitas Diponegoro", "award", "light", "award"),
];

export const allWork = [...projects, ...awards];

export function getProject(slug: string) {
  return allWork.find((project) => project.slug === slug);
}
