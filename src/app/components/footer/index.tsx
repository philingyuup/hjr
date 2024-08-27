'use client'

import Image from "next/image"
import { options as linkOptions } from "../navigator/constants"
import Link from "next/link"
import { Separator } from "@/shadcnComponents/ui/separator"
import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

const newLinkOptions = linkOptions.filter(({ href }) => href !== '/contact')
const options = [{
  href: '/',
  title: 'Home'
}, ...newLinkOptions] satisfies typeof linkOptions

function LinkComponent({ href, children, className }: PropsWithChildren<Omit<typeof options[number], 'title'>> & { className?: string }) {
  return <Link href={href} className={cn('hover:text-primary', className)}>{children}</Link>
}

export default function Footer() {
  return (
    <footer className='bg-slate-300 w-full grid grid-cols-11 justify-items-center py-16 px-10'>
      <p className='col-span-3'>&#x00A9; HJR Construction 2024</p>
      <Separator orientation='vertical'/> 
      <ul className='list-none flex items-center gap-5 col-span-3'>
        {options.map(({ href, title }) => (
          <li key={href}>
            <LinkComponent href={href}>{title}</LinkComponent>
          </li>
        ))}
      </ul>
      <Separator orientation='vertical' /> 
      <LinkComponent href='/contact' className='col-span-3' >Contact Us</LinkComponent>
    </footer>
  )
}