import { defineType } from "sanity";

export default defineType(
	{
		name:'achievement',
		type:'object',
		fields:[
			{type:'image', name:'icon', title:'Achievement Icon'},
			{type:'string', name:'title', title:'Achievement Title'},
			{type:'string', name:'text', title:'Achievement Text'}
		]
	}
)