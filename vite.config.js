import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { splitVendorChunkPlugin } from 'vite'


export default defineConfig({
	plugins: [splitVendorChunkPlugin(), sveltekit()]
	define: {
    'process.env': {}
  }
});
