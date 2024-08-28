'use client'

import { Button } from "@/components/shadcn/button"
import Link from "next/link"

export default function MainPageAboutUs() {
  return (
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
        <Link href='/about' className='text-white'>
          See More
        </Link>
      </Button>
    </div>
  </div>
  )
}