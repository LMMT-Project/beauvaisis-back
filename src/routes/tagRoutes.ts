import {Router}         from 'express';
import {TagController}  from '../controllers/tagController';


const tagsRouter = Router();
const tagController = new TagController();

tagsRouter.get('/:tagName', async (req, res) => {
	
	const tag = req.params.tagName;
	
	const newsElement = await tagController.getNewsByTagName(tag);
	
	if(newsElement) {
		return 	res.status(200).send(newsElement)
	}
	
	return res.status(404).send({
									error: 'Tag not found. TODO redo that'
								});
	
})

export default tagsRouter