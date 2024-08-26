'use client'

import * as React from 'react'

import { useMediaQuery } from '@/lib/hooks/use-media-query'
import MobileNav from './mobile'
import DesktopNav from './desktop'


export default function Navigator() {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  if (!isDesktop) return <MobileNav />
  return <DesktopNav />
}