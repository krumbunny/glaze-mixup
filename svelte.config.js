import adapterNode from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  compilerOptions: {
    experimental: {
      async: true,
    },
  },

  kit: {
    // use adapter-node for fly.io
    adapter: adapterNode(),
    experimental: {
      remoteFunctions: true,
    },
  },
};

export default config;
