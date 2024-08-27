import Hero from './components/hero';
import HeroDescription from './components/hero/content';
import { button, image } from './components/hero/constants';
import AboutUs from './content/about-us';
import { Separator } from '@/shadcnComponents/ui/separator';
import Projects from './content/projects';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero
        image={image}
        button={button}
        heading='Construction and Remodeling in Boston'
      >
        <HeroDescription />
      </Hero>
      <AboutUs />
      <Separator />
      <Projects />
      <Footer />
    </main>
  );
}
