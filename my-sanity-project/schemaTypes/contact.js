export default {
  name: 'contact',
  type: 'document',
  title: 'Contact Information',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email Address',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn URL'
    },
    {
      name: 'supportLink',
      type: 'url',
      title: 'Support Link (Ko-fi, etc.)',
      description: 'Link to Ko-fi, BuyMeACoffee, or Patreon'
    }
  ]
}
