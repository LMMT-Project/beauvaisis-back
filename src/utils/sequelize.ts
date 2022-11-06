import {Sequelize} from 'sequelize-typescript';
import {News}      from '../entities/News';
import {Tag}       from '../entities/Tag';
import {NewsTag}   from '../entities/NewsTag';


export const sequelize = new Sequelize(
  {
	  dialect: 'sqlite',
	  storage: 'database.sqlite',
	  models : [News, Tag, NewsTag],
	  logging: ((msg) => {
		  if(!msg.startsWith('Executing (default)'))
			  console.log(msg);
	  }),
  },
);