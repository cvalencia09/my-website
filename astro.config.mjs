// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import tailwind from "@astrojs/tailwind";

import preact from '@astrojs/preact';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx(), tailwind()],
  //
  markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			[
				rehypeKatex,
				{
					// Katex plugin options
				}
			]
		]
	}
});