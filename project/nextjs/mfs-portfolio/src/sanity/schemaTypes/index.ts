import { type SchemaTypeDefinition } from 'sanity'
import { career } from './career'
import { certification } from './certification'
import { education } from './education'
import { project } from './project'
import { skills } from './skills'
import { profileImage } from './profileImage'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profileImage,
    career,
    certification,
    education,
    project,
    skills

   
  ],
}


