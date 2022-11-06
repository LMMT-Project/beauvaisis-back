import {TagTypes} from './tag.types';

export type NewsTypes = {
	id: number;
	title: string;
	slug: string;
	content: string[] | string;
	image: string | ImageData;
	date: Date;
	tags: TagTypes[];
}