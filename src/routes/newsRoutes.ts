import {Router}         from 'express';
import {NewsController} from '../controllers/newsController';


const newsRouter = Router();
const newsController = new NewsController();

newsRouter.get('/', (req, res) => res.json(
  {
	  name: "Beauvaisis-core",
	  module: "News Module",
	  commands: {
		  list: "Show all news",
		  "<news-slug>": "Show specific news"
	  }
  }
));

newsRouter.get('/list', async (req, res) => {
	const newsList = await newsController.getAllNews();
	res.status(200).send(newsList);
})

newsRouter.get('/:newsSlug', async (req, res) => {
	
	const newsSlug = req.params.newsSlug;
	
	const newsElement = await newsController.getNewsBySlug(newsSlug);
	
	if(newsElement) {
		return 	res.status(200).send(newsElement)
	}
	
	return res.status(404).send({
		error: 'News not found. TODO redo that'
								});
	
})

export default newsRouter;