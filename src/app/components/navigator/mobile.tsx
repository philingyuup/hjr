'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { options } from './constants'
import NavigationLinkItem from './linkItem'
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu'
import H1 from './h1'

const minWidthFullClassName = { className: 'min-w-full' } as const

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className='w-full flex justify-between items-center p-4'>
        <H1/>
        <SheetTrigger asChild>
          <Button aria-label='Open Navigation' variant='outline' onClick={() => setOpen(prev => !prev)}>
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
