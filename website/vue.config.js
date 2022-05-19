const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            "^/api/": {
                target: "https://janikrabenstein.de/api/",
                pathRewrite: { "^/api/": "/api/" },
                changeOrigin: true,
                logLevel: "debug"
            }
        }
    }
})