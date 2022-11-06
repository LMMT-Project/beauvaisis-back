import express, {Application} from 'express';
import routes                 from './routes/genericRoutes';
import {sequelize}            from './utils/sequelize';
import cors from 'cors';
//const swaggerDocument = require('./swagger.json');


(async () => {
	
	await sequelize.sync();
	
	const app: Application = express();
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	
	app.use(express.json());
	app.use(cors())
	app.use(routes);
	app.listen(3333, () => {
		console.log('Server started at http://127.0.0.1:3333');
	});
})();