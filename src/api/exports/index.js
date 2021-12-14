const ExportHandler = require('./handler');
const routes = require('./routes');

module.exports = {
	name: 'exports',
	version: '1.0.0',
	register: async (server, {service, validator}) => {
		const exportsHandler = new ExportHandler(service, validator);
		server.route(routes(exportsHandler));
	},
};