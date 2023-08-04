import { defineType } from "sanity";
export default defineType(
	{
		name:'skill',
		type:'object',
		fields:[
			{type:'image', name:'icon', title:'Skill Icon'},
			{type:'string', name:'title', title:'Skill Title'},
			{type:'string', name:'text', title:'Skill Text'},
			{type:'number', name:'tier', title:'Tier'}
		]
	}
)