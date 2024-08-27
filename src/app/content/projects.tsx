'use client'

import { AspectRatio } from "@/components/shadcn/aspect-ratio"
import Image from "next/image"

const demoProjects = [
  {
    src: '/demo_hero.webp',
    alt: 'Demo Hero Image',
  },
  {
    src: '/real-estate-photo-guide.webp',
    alt: 'Real Estate Photo Guide',
  },
  {
    src: '/construction.jpg',
    alt: 'Construction',
  },
  {
    src: '/demo_hero.webp',
    alt: 'Demo Hero Image', 
  },
  {
    src: '/real-estate-photo-guide.webp',
    alt: 'Real Estate Photo Guide',
  },
  {
    src: '/construction.jpg',
    alt: 'Construction',
  },
]

export default function Projects() {

  return (
    <article className='py-16 px-10 w-full flex flex-col items-center gap-12'>
      <h2 className='text-2xl uppercase font-extrabold text-primary'>our projects</h2>
      <ul className='list-none grid grid-cols-3 grid-rows-2 gap-8 w-full'>
        {
          demoProjects.map(({ src, alt }) => (
            <li key={src}>
              <AspectRatio ratio={4 / 3}>
                <Image src={src} alt={alt} fill aria-hidden className='h-full w-50 opacity-95 object-cover rounded-md'/>
              </AspectRatio>
            </li>
          ))
        }
      </ul>
    </article>
  )
}