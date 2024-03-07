const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://www.utteok.com/',
			ws: true,
			changeOrigin: true,
		})
	);
	app.use(
		'/we',
		createProxyMiddleware({
			target: 'we://www.utteok.com/',
			ws: true,
			changeOrigin: true,
		})
	);
};
