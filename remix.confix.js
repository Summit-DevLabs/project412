module.exports = {
  // ...
  server: {
    protocol: "http",
    host: "localhost",
    port: 3000,
  },
  devServer: {
    // ...
  },
  routes: {
    // ...
  },
  publicPath: "publicPath",
  appDirectory: "app",
  loaders: {
    // ...
  },
  serverAdapter: "@remix-run/vercel/adapter",
};