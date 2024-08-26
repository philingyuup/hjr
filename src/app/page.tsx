import { Button } from '@/shadcnComponents/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <article className='h-[60vh] w-full relative'>
        <Image src='/demo_hero.webp' alt='Demo Hero Image' fill objectFit='cover' aria-hidden className='opacity-95'/>
        <div className='backdrop-blur-2xl absolute bottom-5 left-5 p-6 rounded-lg'>
          <h2 className='sr-only'>Construction and Remodeling in Boston</h2>
          <div className='flex flex-col gap-2'>
            <p className='text-3xl text-primary'>Commercial + Residential</p>
            <p className='text-xl text-slate-300 flex flex-col mb-6'>
              <span>Construction and Remodeling </span>
              <span>in the Greater Boston Area</span>
            </p>
            <div>
              <Button asChild>
                <Link href='about' className='text-white'>
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
