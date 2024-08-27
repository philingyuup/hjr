'use client'

import { defaultNavigationMenuTriggerStyle, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from "@/components/shadcn/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type NavigationLinkItemProps = {
  href: string,
  navigationMenuLinkProps?: ComponentPropsWithoutRef<typeof NavigationMenuLink>,
  navigationMenuItemProps?: ComponentPropsWithoutRef<typeof NavigationMenuItem>,
}

export default function NavigationLinkItem({
  href,
  children,
  navigationMenuLinkProps = {},
  navigationMenuItemProps = {}
  }: PropsWithChildren<NavigationLinkItemProps>) {
    const {
      className: navigationMenuLinkClassName,
      ...restNavigationMenuLinkProps
    } = navigationMenuLinkProps

    return (
    <NavigationMenuItem {...navigationMenuItemProps}>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={cn(defaultNavigationMenuTriggerStyle, navigationMenuLinkClassName)} {...restNavigationMenuLinkProps}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}