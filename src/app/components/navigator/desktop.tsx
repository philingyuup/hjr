'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  defaultNavigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { options } from './constants'
import NavigationLinkItem from './linkItem'
import { cn } from '@/lib/utils'

export default function DesktopNav() {
  return (
    <NavigationMenu className='max-w-full [&>div:first-child]:contents p-4'>
      <NavigationMenuList className='w-full flex justify-between'>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink className={cn(defaultNavigationMenuTriggerStyle,'text-xl')}>
              HJR
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <div className='flex'>
          {options?.map(({ href, title }) => (
            <NavigationLinkItem key={href} href={href}>
              {title}
            </NavigationLinkItem>
          ))}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}