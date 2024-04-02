import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'studio',
  projectId: 'n0gkmc9c',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  cors: {
    allowOrigins: ['https://buchlaandbeyond.com'], // Add your personal domain here
    allowCredentials: true, // Enable credentials if needed
    allowHeaders: ['Authorization'], // Customize allowed headers if needed
  },
});
