import { defineConfig } from "cypress";
import mochawesome from 'cypress-mochawesome-reporter/plugin';
export default defineConfig({
  projectId:"j6hwhz",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",

    },
  },
  viewportWidth: 1500,
  viewportHeight: 1200,
  watchForFileChanges:false,
  reporter:"cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);
    },
  },

  env:{
    hideXhr:true,
    amazon:'https://www.amazon.de',
    google:'https://www.google.com',
    saucedemo:'https://www.saucedemo.com',

  }
});
