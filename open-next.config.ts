export default {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "kv", // instead of dummy
      tagCache: "kv", // instead of dummy
      queue: "kv", // instead of direct
    },
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "kv",
      tagCache: "kv",
      queue: "kv",
    },
  },
};
