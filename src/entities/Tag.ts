import {Table, Column, Model, DataType} from 'sequelize-typescript';

@Table
export class Tag extends Model {
	
	@Column(DataType.TEXT)
	name: string;
	
}