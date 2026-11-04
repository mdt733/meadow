import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const path = relative => fileURLToPath(new URL(relative,import.meta.url));
export default defineConfig({
  base:'./',
  build:{
    outDir:path('./dist'),
    emptyOutDir:true,
    target:'es2022',
    assetsInlineLimit:0,
    minify:'esbuild',
    rollupOptions:{
      preserveEntrySignatures:'strict',
      input:path('./src/index.js'),
      output:{
        entryFileNames:'emu-physics.js',
        chunkFileNames:'chunks/[name]-[hash].js',
        assetFileNames:'assets/[name]-[hash][extname]'
      }
    }
  }
});
