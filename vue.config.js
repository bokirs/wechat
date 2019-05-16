
module.exports = {
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    devServer: {
	    proxy: {
	        '/api': {
	            target: 'http://openapi.tuling123.com/openapi/api',
	            changeOrigin: true,
	            ws: true,
	            pathRewrite: {
					'^/api': ''
	            }
	        }
	    },
	}
}