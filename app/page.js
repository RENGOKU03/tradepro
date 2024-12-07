import Navigation from "@/app/components/Navigation";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-800 font-sans">
      <Navigation />
      <Hero />
    </div>
  );
}
