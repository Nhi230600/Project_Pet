const { resolve } = require("path");
export default {
  plugins: [],
  server: {
    open: "/index.html",
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        another: resolve(__dirname, "book.html"),
        another: resolve(__dirname, "contact.html"),
        another: resolve(__dirname, "login.html"),
        another: resolve(__dirname, "register.html"),
        another: resolve(__dirname, "homepage.html"),
      },
    },
  },
};
