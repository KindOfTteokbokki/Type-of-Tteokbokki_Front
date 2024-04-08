const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://dev.utteok.com/',
			ws: true,
			changeOrigin: true,
		})
	);
	app.use(
		'/we',
		createProxyMiddleware({
			target: 'we://dev.utteok.com/',
			ws: true,
			changeOrigin: true,
		})
	);
};
