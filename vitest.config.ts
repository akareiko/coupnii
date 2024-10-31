import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  root: 'examples',
  build: {
    outDir: '../examples/dist',
    emptyOutDir: true,
  },
  test: {
    exclude: [...configDefaults.exclude, "tests/playwright/**"],
    coverage: {
      enabled: true,
      include: ["src/**"],
      reportsDirectory: "./coverage-vitest",
    },
    environment: 'happy-dom',
    restoreMocks: true
  },
});
