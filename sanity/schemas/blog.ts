/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'title of blog article'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of our blog article',
      options: {
        source: 'title'
      }
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        }
      ],
    },
  ]
}
