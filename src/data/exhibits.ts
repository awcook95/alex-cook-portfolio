import type { Exhibit } from '@/types/Exhibit'

export const exhibits: Exhibit[] = [
  {
    id: 'photography',
    title: 'Photography',
    src: `${import.meta.env.BASE_URL}/photos/dekaiyama-main-stage.JPG`,
    description: 'View some of my favorite photos'
  },
  {
    id: 'second',
    title: 'Second Exhibit',
    src: 'https://via.placeholder.com/400x200.png?text=Exhibit+2',
    description: 'Another example showcase.'
  }
]

export function getExhibitById(id: string): Exhibit | undefined {
  return exhibits.find(ex => ex.id === id)
}
