import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Set your GitHub Pages repo name here
const repoName = "Jolu-Security-Website";

export default defineConfig(({ mode }) => {
  // Detect if running in GitHub Pages
  // GitHub Actions automatically sets CI=true, so we can check for production mode + CI
  const isGitHubPages = mode === "production" && process.env.CI;

  return {
    // ✅ Use repo path on GitHub Pages, otherwise use relative './'
    base: isGitHubPages ? `/${repoName}/` : "./",

    server: {
      host: "::", // IPv6 support
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
