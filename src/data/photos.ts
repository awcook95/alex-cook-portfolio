import type { PhotoEntry } from '@/types/PhotoEntry'

const base = `${import.meta.env.BASE_URL}photos/`

export const photos: PhotoEntry[] = [
  {
    id: 'dekaiyama-main-stage',
    src: `${base}dekaiyama-main-stage.JPG`,
    title: 'Dekaiyama Main Stage',
    description: 'The main event at the Dekaiyama festival, showcasing traditional performances.'
  },
  {
    id: 'fire-festival',
    src: `${base}fire-festival.jpg`,
    title: 'Fire Festival',
    description: 'A vibrant fire festival celebration. (Placeholder description)'
  },
  {
    id: 'kyoto-toji-temple',
    src: `${base}kyoto-toji-temple.JPG`,
    title: 'Kyoto Toji Temple',
    description: 'The historic Toji Temple in Kyoto. (Placeholder description)'
  },
  {
    id: 'shika-countryside',
    src: `${base}shika-countryside.JPG`,
    title: 'Shika Countryside',
    description: 'A peaceful view of the Shika countryside. (Placeholder description)'
  },
  {
    id: 'shika-stone-shrine',
    src: `${base}shika-stone-shrine.JPG`,
    title: 'Shika Stone Shrine',
    description: 'A traditional stone shrine in Shika. (Placeholder description)'
  },
  {
    id: 'shika-stone-shrine-2',
    src: `${base}shika-stone-shrine-2.JPG`,
    title: 'Shika Stone Shrine 2',
    description: 'Another view of the stone shrine in Shika. (Placeholder description)'
  },
  {
    id: 'shogi-board-and-pieces',
    src: `${base}shogi-board-and-pieces.jpg`,
    title: 'Shogi Board and Pieces',
    description: 'A close-up of a shogi board and pieces. (Placeholder description)'
  },
  {
    id: 'shogi-kings',
    src: `${base}shogi-kings.jpg`,
    title: 'Shogi Kings',
    description: 'The kings from a shogi set. (Placeholder description)'
  },
  {
    id: 'table-tennis-in-japan',
    src: `${base}table-tennis-in-japan.JPG`,
    title: 'Table Tennis in Japan',
    description: 'Table tennis being played in Japan. (Placeholder description)'
  },
  {
    id: 'taito-ameyayokocho',
    src: `${base}taito-ameyayokocho.JPG`,
    title: 'Taito Ameyokocho',
    description: 'The bustling Ameyokocho market in Taito. (Placeholder description)'
  },
  {
    id: 'tokyo-alley',
    src: `${base}tokyo-alley.jpg`,
    title: 'Tokyo Alley',
    description: 'A narrow alleyway in Tokyo. (Placeholder description)'
  },
  {
    id: 'tokyo-underpass',
    src: `${base}tokyo-underpass.JPG`,
    title: 'Tokyo Underpass',
    description: 'An urban underpass in Tokyo. (Placeholder description)'
  },
]
