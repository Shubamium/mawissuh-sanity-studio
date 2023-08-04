import { defineField, defineType } from "sanity";

export default defineType({
	name:'profile',
	title:'Profile',
	type:'document',
	fields:[
		defineField({
			name:'preset',
			title:'Preset ID',
			description: "You can have multiple presets, Set the one you want to use to 'main'",
			type:'string',
			
		}),
		defineField({
			name:'name',
			title:'Name',
			type:'string',
			validation: rule => rule.max(15).warning('Having the name too long might break the layout')
		}),
		defineField({
			name:'bio',
			title:'Profile Bio',
			type:'array',
			of:[{type:'block'}],
		}),
		defineField({
			name:'tagline',
			title:'Role - Class - Tagline',
			type:'string',
		}),
		defineField({
			name:'classifications',
			title:'Character Classification',
			type:'array',
			of:[{type:'string'}]
		}),
		defineField({
			name:'stats',
			type:'array',
			of:[
				{type:'stat'}
			]
		}),
		defineField({
			name:'skills',
			type:'array',
			of:[
				{type:'skill'}
			]
		}),
		defineField({
			name:'achievements',
			type:'array',
			of:[
				{type:'achievement'}
			]
		}),
		defineField({
			name:'profile_pic',
			type:'image',
			validation: rule => rule.required()
		}),
		defineField({
			name:'achievement_unlocked',
			title:'Achievement Count',
			type:'number',
		})
	]
	
})