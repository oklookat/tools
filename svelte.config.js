import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static"; 

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            base: dev ? "" : "/tools",
        },
        prerender: {
            default: true
        }
    }
};

export default config;
