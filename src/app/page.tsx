import Hero from '../components/custom/hero';
import HeroDescription from '../components/custom/hero/content';
import { button, image } from '../components/custom/hero/constants';
import AboutUs from './content/about-us';
import { Separator } from '@/components/shadcn/separator';
import Projects from './content/projects';
import Footer from '../components/custom/footer';

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
