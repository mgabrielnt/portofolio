export type Project = {
  slug: string;
  title: string;
  kicker: string;
  theme: "dark" | "light";
  stack: string[];
  summary: string;
  metrics: string[];
};

export const projects: Project[] = [
  {
    slug: "stockforecast",
    title: "StockForecast",
    kicker: "selected work / interface preview",
    theme: "light",
    stack: ["Python", "Streamlit", "TFT", "LLM Sentiment"],
    summary: "Dashboard prediksi harga saham Indonesia berbasis LLM-TFT.",
    metrics: ["4 blue-chip stocks", "H+1 to H+3 horizon", "8.599 rows"],
  },
  {
    slug: "llm-tft",
    title: "LLM-TFT",
    kicker: "selected work / model architecture",
    theme: "dark",
    stack: ["TFT", "Time Series", "QuantileLoss", "PyTorch"],
    summary: "Model forecasting multi-horizon dengan fitur teknikal dan sentimen.",
    metrics: ["RMSE improved", "Directional accuracy", "27 scenarios"],
  },
  {
    slug: "ai-sentiment",
    title: "AI Sentiment",
    kicker: "selected work / data pipeline",
    theme: "dark",
    stack: ["GPT", "RSS", "Pandas", "NLP"],
    summary: "Pipeline berita, pembersihan, label LLM, dan agregasi harian.",
    metrics: ["44.335 news rows", "LLM labels", "Daily aggregation"],
  },
  {
    slug: "dashboard",
    title: "Dashboard Infrastructure",
    kicker: "selected work / deployment system",
    theme: "light",
    stack: ["Streamlit", "Python", "SHAP", "LIME"],
    summary: "Sistem dashboard analitik, prediksi, visualisasi, dan XAI.",
    metrics: ["Deploy-ready", "XAI views", "Model comparison"],
  },
  {
    slug: "portfolio-system",
    title: "Portfolio System",
    kicker: "selected work / personal brand system",
    theme: "dark",
    stack: ["Next.js", "Tailwind", "Motion", "Vercel"],
    summary: "Portfolio premium untuk AI/Data dan full stack career growth.",
    metrics: ["Fast UX", "SEO-ready", "Mobile-first"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
