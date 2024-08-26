'use client'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useState } from "react"
import { options } from "./constants"
import NavigationLinkItem from "./linkItem"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"

const minWidthFullClassName = { className: 'min-w-full' } as const

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className='max-w-full flex justify-end p-4'>
        <SheetTrigger asChild>
          <Button aria-label='Open Navigation' variant="outline" onClick={() => setOpen(prev => !prev)}>
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent className='w-[200px] ph-0'>
        <NavigationMenu className='max-w-full [&>div:first-child]:contents p-4 px-0 mt-3'>
          <NavigationMenuList className='flex-col gap-2 align-middle w-100 [&_li]:min-w-full'>
            <NavigationLinkItem href='/' navigationMenuLinkProps={minWidthFullClassName}>Home</NavigationLinkItem>
            {options?.map(({ href, title }) => (
              <NavigationLinkItem key={href} href={href} navigationMenuLinkProps={minWidthFullClassName}>{title}</NavigationLinkItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  )
}
