import type { Exhibit } from '@/types/exhibit'

export const exhibits: Exhibit[] = [
  {
    id: 'first',
    title: 'First Exhibit',
    image: 'https://via.placeholder.com/400x200.png?text=Exhibit+1',
    description: 'A preview of the first collection.'
  },
  {
    id: 'second',
    title: 'Second Exhibit',
    image: 'https://via.placeholder.com/400x200.png?text=Exhibit+2',
    description: 'Another example showcase.'
  }
]

export function getExhibitById(id: string): Exhibit | undefined {
  return exhibits.find(ex => ex.id === id)
}
