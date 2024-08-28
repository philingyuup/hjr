'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar"
import { useMemo } from "react"

type ProfileCardProps = {
  image: {
    src: string,
    alt: string,
  },
  name: string,
  position: string,
}
 
export function ProfileCard({ image, name, position }: ProfileCardProps) {
  const initials = useMemo(() => name.split(' ').map(word => word[0]).join(''), [name])

  return (
    <Card className="w-[280px] h-full">
      <CardHeader className='flex w-full items-center'>
        <Avatar>
          <AvatarImage src={image.src} alt={image.alt} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{position}</CardDescription>
      </CardContent>
    </Card>
  )
}