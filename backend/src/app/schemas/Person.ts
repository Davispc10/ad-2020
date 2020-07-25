import { createSchema, typedModel, Type, ExtractDoc, ExtractProps } from 'ts-mongoose'

export const PersonSchema = createSchema({
  name: Type.string({ required: true }),
  email: Type.string({ required: true }),
  friend: Type.string({ required: false })
}, {
  timestamps: true
})

export const Person = typedModel('Person', PersonSchema)
export type PersonDoc = ExtractDoc<typeof PersonSchema>
export type PersonProps = ExtractProps<typeof PersonSchema>
