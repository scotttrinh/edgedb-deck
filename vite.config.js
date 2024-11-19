export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "./src/index.html",
        sql: "./src/sql.html",
        prisma: "./src/prisma.html",
        perf: "./src/perf.html",
        schema: "./src/schema.html",
        ui: "./src/ui.html",
      },
    },
  },
};