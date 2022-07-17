import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    //dev config
    return {
      server: {
        port: 8000,
      },
      define: {
        global: "window",
      },
    };
  } else {
    //production config
    return {};
  }
});
