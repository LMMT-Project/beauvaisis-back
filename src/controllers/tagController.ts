import {News}           from '../entities/News';
import {NewsTag}        from '../entities/NewsTag';
import {Tag}            from '../entities/Tag';
import {NewsController} from './newsController';
import {NewsTypes}      from '../types/news.types';

export class TagController {
	
	async getTagById(tagId: number) {
		return await Tag.findOne(
		  {
			  where: {id: tagId},
		  });
	}
	
	public async getTagByTagName(tagName: string) {
		return await Tag.findOne(
		  {
			  where: {name: tagName},
		  });
	}
	
	public async getNewsByTagName(tag: string) {
		
		let tagId = await this.getTagByTagName(tag);
		
		if(!tagId) return;
		
		tagId = tagId.id;
		
		const newsId = await NewsTag.findAll(
		  {
			  where: {tagId},
		  });
		
		if(!newsId) return;
		
		const newsList: NewsTypes[] = [];
		const newsController = new NewsController();
		
		for(const newsElement of newsId) {
			const newsElm = await newsController.getNewsById(newsElement.newsId);
			if(newsElm) newsList.push(newsElm);
		}
		
		return newsList;
	}
}