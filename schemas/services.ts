import { defineField, defineType } from "sanity";

export default defineType(
	{
		name:'services',
		title:'Services',
		type:'document',
		fields:[
			defineField(
				{
					name:'title',
					title:'Service Title',
					type:'string',
					validation: rule => rule.required()
				}
			),
			defineField({
				name:'paragraph',
				type:'array',
				of:[
					{type:'block'}
				]
			}),	
			defineField({
				name:'notes',
				type:'array',
				of:[
					{
						type:'object',
						name:'note',
						fields:[{type:'string',name:'note',title:'Note'},{type:'color',name:'bgColor',title:'Background Color'}]
					},
				]
			}),
			defineField({
				name:'image',
				title:'Image or Chibi',
				type:'image',
				validation: rule => rule.required()
			})
		]
	}
)