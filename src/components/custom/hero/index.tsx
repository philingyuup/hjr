'use client'

import { Button } from "@/components/shadcn/button"
import { cn } from "@/lib/utils"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Image from "next/image"
import Link from "next/link"
import { PropsWithChildren, ReactNode } from "react"

type HeroProps = {
  image: {
    src: string,
    alt: string
  },
  heading: string | ReactNode,
  showHeading?: boolean,
  blurContainer?: string,
  showLinearGradient?: boolean,
} & (
  { showButton: false, button?: undefined}
  | { showButton: true, button: { href: string, value: string }}
)

export default function Hero({ children, image, button, showHeading, heading, showButton, blurContainer, showLinearGradient }: PropsWithChildren<HeroProps>) {

  return (
    <article className='w-full relative'>
        <AspectRatio ratio={16 / 7}>
          {showLinearGradient && <div aria-hidden className='absolute min-w-full min-h-full z-10 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.5)]'/>}
          <Image src={image.src} alt={image.alt} fill aria-hidden className='opacity-95 object-cover'/>
        </AspectRatio>
        <div className={cn('backdrop-blur-2xl absolute bottom-5 left-5 p-6 rounded-lg flex flex-col gap-2 z-20', blurContainer)}>
          <h2 className={showHeading ? '' : 'sr-only'}>{heading}</h2>
          <p>
            {children}
          </p>
          {showButton && <div className='mt-4'>
            <Button asChild>
              <Link href={button.href} className='text-white'>
                {button.value}
              </Link>
            </Button>
          </div>}
        </div>
      </article>
  )
}