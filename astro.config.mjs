import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  prefetch: true,
  integrations: [tailwind()],

  markdown: {
    shikiConfig: {
      theme: "slack-dark",
      wrap: true,
    },
  },
});
