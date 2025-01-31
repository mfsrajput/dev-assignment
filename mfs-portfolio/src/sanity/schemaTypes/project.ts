import { Rule } from 'sanity'; 
export const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'projectUrl',
        title: 'Project URL',
        type: 'url',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        validation: (Rule: Rule) => Rule.required()
      }
    ]
  }
  

  