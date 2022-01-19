import { TopBar } from "../components/TopBar";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Nav />
      <Hero />

      <section className="container mx-auto w-full px-2">
        <div className="flex justify-center">
          <Title
            value="Vad erbjuder Linnea för tjänster?"
            label="tjänster"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </section>
    </div>
  );
}
