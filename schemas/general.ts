import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: "You can have multiple presets, Set the one you want to use to 'main'",
      type: 'string',
    }),
    defineField({
      name: 'pricing',
      title: 'Service Price',
      type: 'number',
      validation: (rule) =>
        rule.max(3).warning('Having the price above 1000$ might break the layout'),
    }),
    defineField({
      name: 'text_commission',
      title: 'Commission Status',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.max(80).warning('Having the text too long might break the layout'),
    }),
    defineField({
      name: 'text_experimental',
      title: 'Experimental Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
