export default {
  name: 'hero',
  type: 'document',
  title: 'Hero Section',
  fields: [
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Main Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Subtitle/Description',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroImage',
      type: 'url',
      title: 'Hero Image URL'
    },
    {
      name: 'imageOverlayText',
      type: 'string',
      title: 'Image Overlay Text',
      description: 'Text to display on the hero image'
    }
  ]
}