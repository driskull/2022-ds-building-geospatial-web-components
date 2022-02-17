import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "esri-ds2022",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "dist-custom-elements"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      copy: [{ src: "**/*.html" }],
      serviceWorker: null // disable service workers
    }
  ],
  globalScript: "src/global/global.ts",
  globalStyle: "src/global/global.css"
};
