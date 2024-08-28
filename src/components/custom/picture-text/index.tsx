'use client'

import { AspectRatio } from "@/components/shadcn/aspect-ratio"
import Image from "next/image"
import { PropsWithChildren } from "react"

type PictureTextProps = {
  image: {
    src: string,
    alt: string,
  }
}

export default function PictureText({ image, children}: PropsWithChildren<PictureTextProps>) {

  return (
    <div className='py-16 px-10'>
        <article className='grid grid-cols-2 gap-12'>
          <div className='flex justify-center'>
            <div className='h-[80%] w-[80%]'>
              <AspectRatio ratio={4 / 3}>
                <Image src={image.src} alt={image.alt} fill className='h-full w-50 opacity-95 object-cover rounded-md'/>
              </AspectRatio>
            </div>
          </div>
          <div className='flex items-center'>
            {children}
          </div>
        </article>
      </div>
  )
}