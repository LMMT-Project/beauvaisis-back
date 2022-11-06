import {Table, Column, Model, DataType} from 'sequelize-typescript';
import {Tag}                            from './Tag';

@Table(
  {
	  timestamps: true,
  },
)
export class News extends Model {
	
	@Column(DataType.TEXT)
	title: string;
	
	@Column(DataType.TEXT)
	slug: string;
	
	@Column(DataType.TEXT)
	content: string;
	
	@Column(DataType.TEXT)
	image: string | null;
	
	@Column(DataType.DATE)
	date: Date;
}