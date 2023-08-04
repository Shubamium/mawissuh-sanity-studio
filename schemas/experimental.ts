import { defineField, defineType } from "sanity";

export default defineType({
	name:'experimental_services',
	title:'Experimental Services',
	type:'document',
	fields:[
		defineField({
			name:'title',
			type:'string'
		}),
		defineField({
			name:'description',
			type:'array',
			of:[{type:'block'}]
		})
	]
})