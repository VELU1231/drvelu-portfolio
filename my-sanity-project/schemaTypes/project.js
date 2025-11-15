export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'url',
      type: 'url',
      title: 'Project URL',
      description: 'Live project link'
    },
    {
      name: 'image',
      type: 'url',
      title: 'Project Image URL',
      description: 'Image URL for the project card'
    },
    {
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Lower numbers appear first'
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}
