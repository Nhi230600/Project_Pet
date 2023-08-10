# Tailwind CSS Boilerplate

Setting up a tailwind css based project needs to install the tailwindcss npm package, postcss and autoprefixer - it also requires to configure a tailwind.config.js as well as postcss.config.js (optional, if you're planning to use postcss) and then configure those files manually.

And finally for building the production code with tree-shaking (removing unused css from your project and keeping only what is required) you need to configure the purge settings in your tailwind configuration. For someone new to tailwind and for others who regularly use tailwind in their projects, these are boring jobs and you have to do it repeatedly for every project (or learn how to do it if someone is just starting with tailwind)

So this boilerplate has all the configuration to save your time from this boring configurtion tasks (and from gogling many things)

Use this boilerplate as the starting point for your JAMstack + **Tailwind CSS** based projects.

### Start

First, install NodeJS version 18: https://nodejs.dev/en/download/.
Then run the following command to install dependencies:

```sh
npm i
```

Finally, start application:

```sh
npm run dev
```

### Build

```sh
npm run build
```

then grab everything from the dist folder

### Change server port

Just change the port number in `vite.config.js` file

```javascript
export default {
  plugins: [],
  server: {
    open: "/index.html",
    port: 3000,
  },
};
```

### Configure Tailwind

There is a `tailwind.config.js` file with `purge` instructions and extra colors, feel free to customize it according to your need
