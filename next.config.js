const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development" ? {} : require("next-server/constants")

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {}
  }

  const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")

  return withBundleAnalyzer({
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules/,
        use: [options.defaultLoaders.babel]
      })

      return config
    },
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: "static",
        reportFilename: "../bundles/server.html"
      },
      browser: {
        analyzerMode: "static",
        reportFilename: "../bundles/client.html"
      }
    }
  })
}
