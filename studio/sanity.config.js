import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
  name: "default",
  title: "Sanity Studio",
  projectId: "7fwf7m59",      // your project ID
  dataset: "oAO2FOROu",       // your dataset
  plugins: [deskTool()],
  studio: {
    outputPath: "dist"         // ensures Vercel build goes to studio/dist
  }
});
