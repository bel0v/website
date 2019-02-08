// const { PHASE_PRODUCTION_SERVER } =
//   process.env.NODE_ENV === "development"
//     ? {}
//     : !process.env.NOW_REGION
//     ? require("next/constants")
//     : require("next-server/constants")

module.exports = (phase, { defaultConfig }) => {
  // if (phase === PHASE_PRODUCTION_SERVER) {
  //   // Config used to run in production.
  //   return {}
  // }

  const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

  return withBundleAnalyzer({
    // bundleAnalyzer
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
    }
  })
}
