import { createRequestHandler } from "@remix-run/vercel";

export default createRequestHandler({
  getLoadContext() {
    // Whatever you return here will be passed as `context` to your loaders.
    return {};
  },
});