import { defineType } from "sanity";

export default defineType({
	name:'stat',
	title:'Stat',
	type:'object',
	fields:[
		{
			name:'label',
			type:'string',
			validation: rule => rule.max(15)
		},
		{
			name:'rating',
			description:'Max 6',
			type: 'number',
			validation: rule => rule.lessThan(7).warning()
		}
	
	]
})