import { defineField, defineType } from "sanity";

export default defineType(
	{
		name:'talents',
		title:'Talents',
		type:'document',
		fields:[
			defineField(
				{
					name:'name',
					title:'Talent Name',
					type:'string',
					validation: rule => rule.required()
				}
			),
			defineField({
				name:'status',
				type:'string',
				initialValue:'active',
				options:{
					list:[
						'active','inactive'
					]
				},
			}),
			defineField(
				{
					name:'description_short',
					title:'Short Description',
					type:'string'
				}
			),
			defineField(
				{
					name:'tagline',
					title:'Talent Tagline or Account Handle/Username',
					type:'string'
				}
			),
			defineField({
				name:'description_full',
				title:'Full Description',
				type:'array',
				of:[
					{type:'block'}
				]
			}),	
		
			defineField({
				name:'testimonials',
				title:'Testimonials',
				type:'string'
			}),
			defineField({
				name:'managed_for',
				title:'Managed For',
				type:'string'
			}),
			defineField({
				name:'traits',
				title:'Traits',
				type:'string'
			}),defineField({
				name:'stats',
				title:'Talent Stats',
				type:'array',
				of:[
					{type:'stat'}
				]
			}),
			defineField({
				name:'achievements',
				title:'Talent Achievements',
				type:'array',
				of:[
					{type:'string'}
				]
			}),
			
			defineField({
				name:'image',
				title:'Talent Profile Picture',
				type:'image',
				validation: rule => rule.required()
			})
		],
		preview:{
			select:{
				title:'name',
				media:'image',
				subtitle:'status'
			}
		}
	}
)