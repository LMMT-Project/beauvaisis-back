import {Table, Column, Model, DataType, HasMany, ForeignKey} from 'sequelize-typescript';

@Table
export class NewsTag extends Model {
	
	@Column(DataType.NUMBER)
	newsId: number;
	
	@Column(DataType.NUMBER)
	tagId: number;
	
}