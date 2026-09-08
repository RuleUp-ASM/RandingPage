import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { Reputation } from "@/components/sections/Reputation";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Reputation />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
