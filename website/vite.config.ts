import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localLibPath = path.resolve(__dirname, '../src');
const isCI = process.env.CI || process.env.VERCEL;
const useLocalLib = !isCI && fs.existsSync(localLibPath);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: useLocalLib
      ? [
          {
            find: '@theengineerguy/chronos-picker/dist/style.css',
            replacement: path.resolve(localLibPath, 'styles/DateTimePicker.css'),
          },
          {
            find: '@theengineerguy/chronos-picker',
            replacement: localLibPath,
          },
        ]
      : [],
  },
});
