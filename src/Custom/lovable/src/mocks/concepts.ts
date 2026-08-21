// export type Concept = {
//   id: string
//   name: string
//   description: string
//   content: string
//   author: string
//   authorKind: 'agent' | 'human'
// }

import { KbConceptFragment } from 'src/gql/generated'

export type Concept = KbConceptFragment

export const concepts: Concept[] = []

export function findConcept(id: string): Concept | undefined {
  return concepts.find((concept) => concept.id === id)
}
