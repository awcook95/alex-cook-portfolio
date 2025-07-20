import type { Exhibit } from '@/types/Exhibit'

export const exhibits: Exhibit[] = [
  {
    id: 'photography',
    title: 'Photography',
    src: `${import.meta.env.BASE_URL}/photos/dekaiyama-main-stage.JPG`,
    description: 'View some of my favorite photos'
  },
  {
    id: 'super-snake',
    title: 'Super Snake Game',
    src: `${import.meta.env.BASE_URL}/super_snake/super-snake-game.png`,
    description: 'A simple JavaScript Snake game with a twist.'
  }
]

export function getExhibitById(id: string): Exhibit | undefined {
  return exhibits.find(ex => ex.id === id)
}
