import { type SchemaTypeDefinition } from 'sanity'
import { career } from './career'
import { certification } from './certification'
import { education } from './education'
import { project } from './project'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    career,
    certification,
    education,
    project

   
  ],
}


