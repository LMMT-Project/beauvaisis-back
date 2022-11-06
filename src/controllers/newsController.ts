import {News}          from '../entities/News';
import {NewsTag}       from '../entities/NewsTag';
import {TagController} from './tagController';
import {Tag}           from '../entities/Tag';
import {NewsTypes}     from '../types/news.types';
import {TagTypes}      from '../types/tag.types';

export class NewsController {
	
	public async showNews(news: News) {
		
		if(news === null || news.dataValues.id === null) return;
		
		const newsTag: TagTypes[] = [];
		
		let newsToReturn: NewsTypes = {
			id: news.id,
			title: news.title,
			slug: news.slug,
			content: news.content,
			image: news.image,
			date: news.date,
			tags: newsTag
		};
		
		
		const tagList = await this.getTagsByNewsId(newsToReturn.id);
		
		for(const tag of tagList) {
			
			console.log(tag)
			
			const tagElm: TagTypes = {
				id: tag.id,
				name: tag.name
			}
			
			newsToReturn.tags.push(tagElm);
		}
		
		return newsToReturn;
	}
	
	public async getAllNews() {
		const newsList: NewsTypes[] = [];
		const newsRes = await News.findAll();
		
		for(const news of newsRes) {
			newsList.push(await this.showNews(news));
		}
		
		return newsList;
	}
	
	public async getNewsBySlug(slug: string) {
		return await this.showNews(await News.findOne(
		  {
			  where: {slug},
		  },
		));
	}
	
	public async getNewsById(id: number) {
		return await this.showNews(await News.findOne(
		  {
			  where: {id},
		  },
		));
	}
	
	public async getTagsByNewsId(newsId: number) {
		
		const tagsId = await NewsTag.findAll(
		  {
			  where: {newsId},
		  });
		
		if(!tagsId) return;
		
		const tagList: Tag[] = [];
		const tagController = new TagController();
		
		for(const tag of tagsId) {
			const tagElm = await tagController.getTagById(tag.tagId);
			if(tagList) tagList.push(tagElm);
		}
		
		return tagList;
	}
}