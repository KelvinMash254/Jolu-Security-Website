import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Your GitHub Pages repo name
const repoName = "Jolu-Security-Website";

export default defineConfig(({ mode }) => {
  return {
    // ✅ Use repo path in production builds, otherwise './' for dev/other hosts
    base: mode === "production" ? `/${repoName}/` : "./",

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
