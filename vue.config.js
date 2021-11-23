
module.exports = {
    runtimeCompiler: true,
    devServer: {
        proxy: 'http://localhost:3000',
        port: '8080',
        host: '0.0.0.0',
        overlay: true,
        // host: 'localhost',
    },
    pwa: {
        name: 'Liam Zanyk McLean',
        themeColor: '#v',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        // manifestOptions: {
        //   start_url: '/',
        // },
        iconPaths: {
                faviconSVG: '../public/favicon.png',
                favicon32: '../public/favicon-32x32.png',
                favicon16: '../public/favicon-16x16.png',
                appleTouchIcon: null,
                maskIcon: null,
                msTileImage: null
        }
        // configure the workbox plugin
        // workboxPluginMode: 'generateSW',
        // workboxOptions: {
        //   cleanupOutdatedCaches: true // cleans up cache that is outdated because of a previous version of Workbox.
        // }
        // workboxOptions: {
          // swSrc is required in InjectManifest mode.
        //   swSrc: 'dev/sw.js',
          // ...other Workbox options...
        // }
      }    
}
