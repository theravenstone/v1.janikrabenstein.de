const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            "^/api/": {
                target: "https://janikrabenstein.de/",
                pathRewrite: { "^/api/": "/api/" },
                changeOrigin: true,
                logLevel: "debug"
            }
        }
    }
})