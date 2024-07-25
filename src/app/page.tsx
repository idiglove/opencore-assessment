import Banner from "@/components/organisms/Banner";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import ResourcesGrid from "@/components/organisms/ResourcesGrid";
import SearchBarWithFilters from "@/components/organisms/SearchBarWithFilters";

export default function Home() {
  return (
    <>
      <main className="flex flex-col p-24">
        <Hero className="mb-23" />
        <SearchBarWithFilters className="mb-16" />
        <ResourcesGrid className="mb-32" />
        <Banner />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
