import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), react(), icon()],
  output: "server",
  adapter: cloudflare()
});