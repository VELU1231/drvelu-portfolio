export default {
  name: 'about',
  type: 'document',
  title: 'About Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
      initialValue: 'About'
    },
    {
      name: 'description',
      type: 'text',
      title: 'About Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [{type: 'string'}],
      description: 'List of skills to display'
    },
    {
      name: 'interests',
      type: 'array',
      title: 'Interests',
      of: [{type: 'string'}],
      description: 'List of interests'
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location'
    }
  ]
}
