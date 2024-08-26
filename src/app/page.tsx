import Hero from './components/hero';
import HeroDescription, { button, image } from './components/hero/description';


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero
        image={image}
        button={button}
      >
        <HeroDescription />
      </Hero>
    </main>
  );
}
