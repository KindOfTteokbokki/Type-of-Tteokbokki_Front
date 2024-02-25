const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://dev.utteok.com/',
			changeOrigin: true,
		})
	);
};
