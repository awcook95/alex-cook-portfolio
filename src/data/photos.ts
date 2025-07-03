export interface PhotoEntry {
  id: string
  image: string
  title: string
  description: string
}

export const photos: PhotoEntry[] = [
  {
    id: 'foggy-morning',
    image: '/photos/foggy-morning.jpg',
    title: 'Foggy Morning',
    description: 'Shot in Asheville just after sunrise.'
  }
]
