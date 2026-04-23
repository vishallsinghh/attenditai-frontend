import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import UseCases from "./components/sections/UseCases";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <UseCases />
      <Pricing />
      <FAQ />
    </>
  );
}