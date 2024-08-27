'use client'

import { AspectRatio } from "@/components/shadcn/aspect-ratio"
import { Button } from "@/components/shadcn/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
      <div className='py-16 px-10'>
        <article className='grid grid-cols-2 gap-12'>
          <div className='flex justify-center'>
            <div className='h-[80%] w-[80%]'>
              <AspectRatio ratio={4 / 3}>
                <Image src='/demo_hero.webp' alt='Demo Hero Image' fill className='h-full w-50 opacity-95 object-cover rounded-md'/>
              </AspectRatio>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='h-[80%] w-[80%] flex flex-col gap-4'>
              <h2 className='text-3xl font-bold'>All Purpose General Contracting</h2>
              <p className='text-md'>
                Not sure where to start? We can help you with all your needs. We understand how difficult and time consuming general contracting can be, which is why
                we offer a variety of services to help your achieve your goals. 
              </p>
              <p className='text-md'>
                Our project managers are knowledgable and experienced when dealing with city and town
                jurisdications including Boston, Somerville, East Boston, Westwood, Natick, and more.
              </p>
              <div className='mt-4'>
                <Button asChild>
                  <Link href='/about-us' className='text-white'>
                    See More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
  )
}