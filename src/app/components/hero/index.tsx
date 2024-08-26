'use client'

import { Button } from "@/shadcnComponents/ui/button"
import Image from "next/image"
import Link from "next/link"
import { PropsWithChildren } from "react"

type HeroProps = {
  image: {
    src: string,
    alt: string
  },
  button: {
    href: string,
    value: string,
  }
}

export default function Hero({ children, image, button }: PropsWithChildren<HeroProps>) {

  return (
    <article className='h-[60vh] w-full relative'>
        <Image src={image.src} alt={image.alt} fill aria-hidden className='opacity-95 object-cover'/>
        <div className='backdrop-blur-2xl absolute bottom-5 left-5 p-6 rounded-lg flex flex-col gap-2'>
          <h2>
            {children}
          </h2>
          <div className='mt-4'>
              <Button asChild>
                <Link href={button.href} className='text-white'>
                  {button.value}
                </Link>
              </Button>
            </div>
        </div>
      </article>
  )
}