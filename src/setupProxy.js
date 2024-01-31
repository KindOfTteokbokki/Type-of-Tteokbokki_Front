const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://118.67.132.171:8080',
			changeOrigin: true,
		})
	);
};
