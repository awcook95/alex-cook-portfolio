import type { Exhibit } from '@/types/exhibit'

export const exhibits: Exhibit[] = [
  {
    id: 'photography',
    title: 'Photography',
    image: '/photos/cover.jpg',
    description: 'A collection of photographs'
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
