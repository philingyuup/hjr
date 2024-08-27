'use client'

import { Button } from "@/shadcnComponents/ui/button"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
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
  },
  heading: string,
  showHeading?: boolean,
}

export default function Hero({ children, image, button, showHeading, heading }: PropsWithChildren<HeroProps>) {

  return (
    <article className='w-full relative'>
        <AspectRatio ratio={16 / 7}>
          <Image src={image.src} alt={image.alt} fill aria-hidden className='opacity-95 object-cover'/>
        </AspectRatio>
        <div className='backdrop-blur-2xl absolute bottom-5 left-5 p-6 rounded-lg flex flex-col gap-2'>
          <h2 className={showHeading ? '' : 'sr-only'}>{heading}</h2>
          <p>
            {children}
          </p>
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