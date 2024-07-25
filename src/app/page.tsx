import Banner from "@/components/organisms/Banner";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import ImageGrid from "@/components/organisms/ImageGrid";
import ResourcesGrid from "@/components/organisms/ResourcesGrid";
import SearchBarWithFilters from "@/components/organisms/SearchBarWithFilters";

export default function Home() {
  return (
    <>
      <main className="flex flex-col p-24">
        <Hero className="mb-23" />
        <ResourcesGrid className="mb-[127px]" />
        <Banner />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
