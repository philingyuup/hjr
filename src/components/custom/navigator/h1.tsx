'use client'

import Image from "next/image";
import Link from "next/link";

export default function H1() {
  return (
    <h1>
      <span className='sr-only'>HJR Construction</span>
      <Link href='/'>
        <Image src="/HJR_Public_Logo.svg" width={89.99609375} height={61.39999999999998} alt="HJR Logo"/>
      </Link>
    </h1>
  )
}