import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hsrtools.kittenzexe/", // change to your repo name
  plugins: [sveltekit()],
})
