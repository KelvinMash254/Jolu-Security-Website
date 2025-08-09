import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repoName = "Jolu-Security-Website";

export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === "true";
  const basePath = mode === "production" && isGitHubPages ? `/${repoName}/` : "./";

  return {
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
  };
});
