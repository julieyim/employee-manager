// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    client: "/",
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port:3000
  },
  buildOptions: {
    out: "www",
  },
  optimize: {
    bundle: true,
    splitting: true,
    treeshake: true,
    minify: true,
  },
  packageOptions: {
   polyfillNode:true
  },
};

 
  
  
   
  
  
 

