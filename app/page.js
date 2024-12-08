import Navigation from "@/app/components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-800 font-sans ">
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
