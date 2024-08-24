"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  defaultNavigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const options = [
  {
    href: '/about',
    title: 'About'
  },
  {
    href: '/services',
    title: 'Services'
  },
  {
    href: '/portfolio',
    title: 'About'
  },
  {
    href: '/contact',
    title: 'Contact'
  }
] as const

export default function Navigator() {
  return (
    <NavigationMenu className='max-w-full [&>div:first-child]:contents p-4'>
      <NavigationMenuList className='w-full flex justify-between'>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={`${defaultNavigationMenuTriggerStyle} text-xl`}>
              HJR
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <div className='flex'>
          {options.map(({ href, title }) => (
            <NavigationLinkItem key={href} href={href}>
              {title}
            </NavigationLinkItem>
          ))}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function NavigationLinkItem({ href, children }: React.PropsWithChildren<{ href: string }>) {
    return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={defaultNavigationMenuTriggerStyle}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}