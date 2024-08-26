'use client'


export const image = {
  src: '/demo_hero.webp',
  alt: 'Demo Hero Image',
}

export const button = {
  href: '/services',
  value: 'Learn More'
}

export default function HeroDescription() {
  return (
    <div className='text-2xl text-slate-300 flex flex-col'>
      <span className='text-3xl text-primary'>Commercial + Residential</span>
      <span>Construction and Remodeling </span>
      <span>in the Greater Boston Area</span>
    </div>
  )
}