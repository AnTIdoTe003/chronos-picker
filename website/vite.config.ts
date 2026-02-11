import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@theengineerguy/chronos-picker/dist/style.css',
        replacement: path.resolve(__dirname, '../src/styles/DateTimePicker.css'),
      },
      {
        find: '@theengineerguy/chronos-picker',
        replacement: path.resolve(__dirname, '../src'),
      },
    ],
  },
});
