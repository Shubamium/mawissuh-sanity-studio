import {defineType} from 'sanity'

export default defineType({
  name: 'contact',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'type',
      initialValue: 'discord',
      options: {list: ['discord', 'email', 'twitter', 'twitch', 'youtube', 'website', 'tiktok']},
      validation: (rule) => rule.required(),
    },
    {type: 'string', name: 'link'},
  ],
})
