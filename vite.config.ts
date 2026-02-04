import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Local SEO pages to prerender for faster Google indexing
const LOCAL_SEO_ROUTES = [
  '/',
  '/umzugsunternehmen-duisburg',
  '/privatumzug-duisburg',
  '/firmenumzug-duisburg',
  '/entruempelung-duisburg',
  '/haushaltsaufloesung-duisburg',
  '/moebeltransport-duisburg',
  '/umzug-und-entruempelung-duisburg',
  '/umzug-kosten-duisburg',
  '/angebot',
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Prerendering is configured via postbuild script using react-snap
    // See package.json "postbuild" script
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Export routes for prerender script
  define: {
    'import.meta.env.PRERENDER_ROUTES': JSON.stringify(LOCAL_SEO_ROUTES),
  },
}));
