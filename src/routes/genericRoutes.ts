import {Router}   from 'express';
import newsRoutes from './newsRoutes';
import tagsRoutes  from './tagRoutes';


const routes = Router();

routes.get('/', (req, res) => res.send('Welcome to Beauvaisis API, if you don\'t know where you are, please contact' +
									   ' an administrator.'));

routes.use('/news', newsRoutes);
routes.use('/tags', tagsRoutes);

export default routes;