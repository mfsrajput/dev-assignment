export const skills = {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Skill Name",
        type: "string",
        
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        },
       
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
      }
    ],
  };
  