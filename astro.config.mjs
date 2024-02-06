import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [

		tailwind({

			applyBaseStyles: false,

		}),
		react(),
		icon(),
		mdx(),

	],
	output: "server",
	adapter: cloudflare({

		runtime: {

			mode: "local",
			type: "pages",
		}

	}),
	image: {

		service: {

		  	entrypoint: 'astro/assets/services/noop'

		}

	}

});
