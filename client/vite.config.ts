import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Set your repo name here
const repoName = "Jolu-Security-Website";

// Detect if we're in GitHub Pages environment
const isGitHubPages = process.env.GITHUB_PAGES === "true";

// If on GitHub Pages, use repo name as base; otherwise use relative './'
const basePath = isGitHubPages ? `/${repoName}/` : "./";

export default defineConfig(({ mode }) => ({
  base: basePath,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
