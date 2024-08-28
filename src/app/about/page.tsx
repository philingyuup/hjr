'use client'

import Footer from "@/components/custom/footer"
import Hero from "@/components/custom/hero"
import { image } from "@/components/custom/hero/constants"
import PictureText from "@/components/custom/picture-text"
import { ProfileCard } from "@/components/custom/profile-card"
import { Separator } from "@/components/shadcn/separator"
import { ComponentPropsWithoutRef } from "react"

const owners: Array<ComponentPropsWithoutRef<typeof ProfileCard>> = [
  {
    name: 'Hannah Wang',
    position: 'Accounting & Finances',
    image: {
      src: '/white-mannequin-head.webp',
      alt: "Hannah's headshot",
    },
  },
  {
    name: 'Jamie Chen',
    position: 'Project Manager & General Contractor',
    image: {
      src: '/white-mannequin-head.webp',
      alt: "Jamie's headshot",
    },
  },
  {
    name: 'Robin Cho',
    position: 'General Contractor & Architect',
    image: {
      src: '/white-mannequin-head.webp',
      alt: "Robin's headshot",
    },
  }
]


function BlurContainerHeading(){
  return (
    <span className='text-white text-2xl uppercase font-bold'>helping you is our <span className='text-primary block text-3xl font-bold'>Passion</span></span>
  )
}

export default function About() {
  
  return (
    <div>
      <Hero
        image={image}
        showButton={false}
        heading={<BlurContainerHeading/>}
        showHeading 
        showLinearGradient
        blurContainer='top-1/4 left-[10%] w-[24rem] backdrop-blur-none'
      >
        <span className='text-white'>
          Our mission is to help you achieve your desired goals while making your experience as seamless as possible. 
        </span>
      </Hero>
      <PictureText image={image}>
        <div className='flex gap-4 flex-col'>
          <h2 className='text-2xl font-bold text-slate-600 uppercase'>Our story</h2>
          <p>
            Our owners, Hannah, Jamie and Robin, originally came from different backgrounds of accounting, finance, and architecture design . United
            by their frustrations with communication, organization, and delayed deadlines from working with various contractors, they knew there had to be an alternative.   
          </p>
          <p>
            Forming HJR Consturction in 2022, the trio were on a mission to transform the way clients work with contractors. Offering end to end services
            from permitting, demolition, construction, to final inspection, our goal is to make sure your process is as smooth and efficient as possible. 
          </p>
        </div>
      </PictureText>
      <Separator className='w-full'/>
      <div className='py-16 px-10 flex flex-col gap-8 items-center w-full'>
        <h2 className='text-3xl text-primary font-bold'>OUR OWNERS</h2>
        <ul className='list-none grid grid-cols-3 w-full justify-items-center content-stretch align-'>
          {owners.map(({ name, position, image }) => (
            <li key={name}>
              <ProfileCard name={name} position={position} image={image} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}